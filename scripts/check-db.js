const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    console.log('🔍 Checking database connection...');
    await prisma.$connect();
    console.log('✅ Database connected successfully!');
    
    const count = await prisma.project.count();
    console.log(`📊 Found ${count} projects in database`);
    
    await prisma.$disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.error('\n💡 Possible solutions:');
    console.error('1. Check if your DATABASE_URL in .env is correct');
    console.error('2. Verify your Neon database is not paused');
    console.error('3. Check your internet connection');
    console.error('4. Try removing channel_binding from DATABASE_URL');
    await prisma.$disconnect();
    process.exit(1);
  }
}

checkDatabase();
