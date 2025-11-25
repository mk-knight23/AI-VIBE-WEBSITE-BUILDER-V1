#!/usr/bin/env node

/**
 * API Integration Test Script
 * Tests all three providers with their official API specifications
 */

const fs = require('fs');
const path = require('path');

// Load .env file manually
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      process.env[key] = value;
    }
  });
}

const providers = {
  openrouter: {
    baseUrl: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY,
    model: 'qwen/qwen3-coder:free',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
      'X-Title': 'Vibe AI Builder',
      'Content-Type': 'application/json',
    }
  },
  megallm: {
    baseUrl: 'https://ai.megallm.io/v1',
    apiKey: process.env.MEGALLM_API_KEY,
    model: 'llama3-8b-instruct',
    headers: {
      'Authorization': `Bearer ${process.env.MEGALLM_API_KEY}`,
      'Content-Type': 'application/json',
    }
  },
  agentrouter: {
    baseUrl: 'https://agentrouter.org/v1',
    apiKey: process.env.AGENTROUTER_API_KEY,
    model: 'glm-4.5',
    headers: {
      'Authorization': `Bearer ${process.env.AGENTROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    }
  },
  routeway: {
    baseUrl: 'https://api.routeway.ai/v1',
    apiKey: process.env.ROUTEWAY_API_KEY,
    model: 'deepseek-v3-0324:free',
    headers: {
      'Authorization': `Bearer ${process.env.ROUTEWAY_API_KEY}`,
      'Content-Type': 'application/json',
    }
  }
};

async function testProvider(name, config) {
  console.log(`\n🧪 Testing ${name}...`);
  console.log(`   URL: ${config.baseUrl}/chat/completions`);
  console.log(`   Model: ${config.model}`);
  console.log(`   API Key: ${config.apiKey ? '✓ Set' : '✗ Missing'}`);

  if (!config.apiKey) {
    console.log(`   ❌ SKIPPED - No API key found\n`);
    return;
  }

  try {
    const response = await fetch(`${config.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify({
        model: config.model,
        messages: [
          { role: 'user', content: 'Say "Hello from ' + name + '" in one sentence.' }
        ],
        max_tokens: 50,
        temperature: 0.7,
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(`   ❌ FAILED - Status: ${response.status}`);
      console.log(`   Error:`, JSON.stringify(data, null, 2));
      return;
    }

    const content = data.choices?.[0]?.message?.content || 'No response';
    console.log(`   ✅ SUCCESS`);
    console.log(`   Response: ${content.substring(0, 100)}...`);
    console.log(`   Tokens: ${data.usage?.total_tokens || 'N/A'}`);

  } catch (error) {
    console.log(`   ❌ ERROR: ${error.message}`);
  }
}

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  API Provider Integration Test');
  console.log('═══════════════════════════════════════════════════');

  for (const [name, config] of Object.entries(providers)) {
    await testProvider(name, config);
  }

  console.log('\n═══════════════════════════════════════════════════');
  console.log('  Test Complete');
  console.log('═══════════════════════════════════════════════════\n');
}

main().catch(console.error);
