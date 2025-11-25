#!/bin/bash

echo "🚀 Starting Inngest Dev Server..."
inngest-cli dev &
INNGEST_PID=$!

sleep 3

echo "🚀 Starting Next.js Dev Server..."
npm run dev &
NEXT_PID=$!

echo ""
echo "✅ Servers running:"
echo "   - Inngest UI: http://localhost:8288"
echo "   - Next.js App: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all servers"

trap "kill $INNGEST_PID $NEXT_PID 2>/dev/null; exit" INT TERM

wait
