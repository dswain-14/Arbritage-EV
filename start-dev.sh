#!/bin/bash

# Sports Betting Analytics - Development Server Startup Script
# This script ensures the development server starts correctly in sandbox/cloud environments
#
# First time usage: Make this script executable with: chmod +x start-dev.sh
# Then run: ./start-dev.sh

set -e

echo "🚀 Starting Sports Betting Analytics Development Server..."
echo ""

# Step 1: Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
    echo ""
else
    echo "✅ Dependencies already installed"
    echo ""
fi

# Step 2: Build the application
echo "🔨 Building application..."
npm run build
echo "✅ Build completed"
echo ""

# Step 3: Clean port if needed (optional, may not work in all environments)
# Note: This step attempts to free port 3000 if it's already in use.
# It's safe to ignore failures here - if the port is free, fuser returns an error which we ignore.
# If the command doesn't exist on the system, it also safely fails without stopping the script.
echo "🧹 Cleaning port 3000 (if in use)..."
npm run clean-port 2>/dev/null || echo "   (Port cleaning skipped - not needed or command unavailable)"
echo ""

# Step 4: Start the development server
echo "🌐 Starting development server on port 3000..."
echo "   Server will be available at:"
echo "   - http://localhost:3000"
echo "   - http://0.0.0.0:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the server with correct host binding for sandbox environments
npm run dev:sandbox
