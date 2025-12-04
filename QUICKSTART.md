# Quick Start Guide

## Starting the Development Server

This guide will help you get the Sports Betting Analytics application running on port 3000.

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Option 1: Using the Startup Script (Recommended)

The easiest way to start the development server:

```bash
./start-dev.sh
```

This script will:
1. Install dependencies (if not already installed)
2. Build the application
3. Clean port 3000 (if needed)
4. Start the development server on 0.0.0.0:3000

### Option 2: Manual Steps

If you prefer to run commands manually:

```bash
# 1. Install dependencies
npm install

# 2. Build the application
npm run build

# 3. Start the development server
npm run dev:sandbox
```

### Verifying the Server is Running

Once the server starts, you should see:

```
[wrangler:info] Ready on http://0.0.0.0:3000
[wrangler:info] - http://127.0.0.1:3000
```

You can test it with:

```bash
# Test the main page
curl http://localhost:3000

# Test the API
curl http://localhost:3000/api/games
```

### Available Scripts

- `npm run dev` - Start Vite development server (local development)
- `npm run dev:sandbox` - Start Wrangler Pages dev server on 0.0.0.0:3000 (for sandbox/cloud environments)
- `npm run build` - Build the application
- `npm run preview` - Preview the built application
- `npm run deploy` - Deploy to Cloudflare Pages
- `npm run clean-port` - Clean port 3000 if it's in use
- `npm run test` - Test if the server is running

### Troubleshooting

#### Issue: Dependencies not installed
**Solution**: Run `npm install`

#### Issue: Build artifacts missing
**Solution**: Run `npm run build` before starting the server

#### Issue: Port 3000 already in use
**Solution**: Run `npm run clean-port` or manually stop the process using port 3000

#### Issue: Server not accessible in sandbox environment
**Solution**: The server is configured to bind to 0.0.0.0 (all interfaces) which is required for sandbox/cloud environments. This is already configured in the `dev:sandbox` script.

#### Issue: Cloudflare Workers warnings
**Solution**: The warnings about "Unable to fetch the `Request.cf` object" are expected in local development and can be safely ignored.

### Key Configuration Files

- `vite.config.ts` - Vite build configuration
- `wrangler.jsonc` - Cloudflare Workers configuration
- `ecosystem.config.cjs` - PM2 configuration (alternative to npm scripts)
- `package.json` - npm scripts and dependencies

### Application URLs

- **Main Application**: http://localhost:3000
- **API Endpoint**: http://localhost:3000/api/games
- **Static Assets**: http://localhost:3000/static/

### Next Steps

Once the server is running:
1. Open http://localhost:3000 in your browser
2. Explore the sports betting analytics interface
3. Check the README.md for full feature documentation
4. Review the API documentation for integration details
