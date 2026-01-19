#!/bin/bash
echo "Waiting for preview server to be ready..."
wait-on http://localhost:4321
echo "Preview server ready, starting ngrok..."
echo ""

# Start ngrok and get URL from API after a short delay
ngrok http 4321 &
NGROK_PID=$!

# Wait for ngrok to start
sleep 3

# Get the public URL from ngrok's local API
NGROK_URL=$(curl -s http://localhost:4040/api/tunnels 2>/dev/null | grep -o '"public_url":"https://[^"]*"' | head -1 | cut -d'"' -f4)

if [ -n "$NGROK_URL" ]; then
  echo "✅ ngrok tunnel active:"
  echo "   Public URL: $NGROK_URL"
  echo "   Local URL: http://localhost:4321"
  echo "   Web Interface: http://localhost:4040"
  echo ""
else
  echo "⚠️  ngrok started. Check http://localhost:4040 for the web interface and public URL"
  echo ""
fi

# Keep script running
wait $NGROK_PID
