# Sports Betting Analytics - Outlier Style

A modern, professional sports betting analytics web application featuring Expected Value (EV+) indicators, real-time odds tracking, and a sleek dark-themed UI inspired by Outlier's design philosophy.

## 🌐 Live Demo

**Production URL**: https://3000-iuqucy9do7pgtnix7db1s-b9b802c4.sandbox.novita.ai

## ✨ Features

### Currently Completed Features

✅ **Modern Dark Theme UI**
- Professional dark color scheme (#1a1a1a background, #252525 cards)
- Bright green EV+ indicators (#00ff88) that pulse with animation
- Clean typography using system fonts
- Responsive design for mobile, tablet, and desktop

✅ **Game Cards with Comprehensive Information**
- Game date/time display (e.g., "Fri 7:00 PM")
- Team records: Overall (8-4) and Conference (6-2)
- National rankings displayed prominently for ranked teams
- Away @ Home format with clear team identification

✅ **Three Betting Markets**
- **Moneyline**: Direct win/loss odds
- **Spread**: Point spread betting with handicaps
- **Total (Over/Under)**: Combined score predictions

✅ **EV+ System (Expected Value Indicators)**
- Green badges highlighting positive expected value bets
- Displays EV percentage (e.g., "EV+3.2")
- Pulse animation to draw attention
- 23 EV+ opportunities across 10 games

✅ **Interactive Navigation**
- 8 sport categories: NBA, NFL, NCAAFB, NCAAMB, Soccer, NHL, MLB, WNBA
- Week selector dropdown (Week 14-17)
- Active state indicators for current sport
- User profile icon

✅ **Advanced Features**
- Public betting percentage toggle
- Shows betting distribution between teams
- Clickable bet options with selection highlighting
- "Match Details" buttons for each game
- Real-time filtering by sport and week

✅ **Statistics Dashboard**
- Total games counter
- EV+ opportunities counter
- Average line value display
- Top ranked games counter

✅ **Mock Data**
- 10 realistic college football games
- Mix of ranked and unranked teams
- Various betting scenarios
- Realistic odds in American format

## 📊 Current Functional Entry URIs

### Main Application
- **Path**: `/`
- **Method**: GET
- **Description**: Main UI with all betting analytics features
- **Features**: Navigation, game cards, filters, statistics

### Games API
- **Path**: `/api/games`
- **Method**: GET
- **Response Format**: JSON
- **Description**: Returns all available games with betting markets
- **Response Example**:
```json
{
  "games": [
    {
      "id": "1",
      "dateTime": "Fri 7:00 PM",
      "sport": "NCAAFB",
      "week": "Week 15",
      "awayTeam": {
        "name": "TROY",
        "abbreviation": "TROY",
        "record": "8-4",
        "conferenceRecord": "6-2"
      },
      "homeTeam": {
        "name": "JMU",
        "abbreviation": "JMU",
        "record": "11-1",
        "conferenceRecord": "7-1",
        "ranking": 3
      },
      "markets": {
        "moneyline": [...],
        "spread": [...],
        "total": [...]
      },
      "publicBetting": {
        "awayPercentage": 35,
        "homePercentage": 65
      }
    }
  ]
}
```

### Static Assets
- **Path**: `/static/style.css`
- **Description**: Custom CSS with animations and dark theme
- **Path**: `/static/app.js`
- **Description**: Client-side JavaScript for interactivity

## 🚀 Features Not Yet Implemented

### High Priority
- [ ] Live odds updates (WebSocket integration)
- [ ] User authentication and saved preferences
- [ ] Bet slip functionality to save selected bets
- [ ] Multi-sportsbook comparison
- [ ] Historical odds tracking and charts

### Medium Priority
- [ ] Search/filter by team name
- [ ] Advanced analytics and trends
- [ ] Push notifications for EV+ changes
- [ ] Export bet analysis to PDF
- [ ] Dark/light theme toggle

### Low Priority
- [ ] Social sharing features
- [ ] User betting history
- [ ] Custom alert thresholds
- [ ] Mobile native app

## 🔧 Recommended Next Steps

1. **Backend Integration**
   - Connect to real sportsbook APIs (DraftKings, FanDuel, etc.)
   - Implement odds aggregation service
   - Set up automated odds updates

2. **User Features**
   - Add authentication (OAuth, email/password)
   - Implement user profiles and preferences
   - Create bet slip functionality
   - Add bookmarking/favorites

3. **Data Enhancement**
   - Integrate historical data
   - Add team statistics and trends
   - Implement ML-based EV calculations
   - Add injury reports and news

4. **Performance Optimization**
   - Implement caching with Cloudflare KV
   - Add pagination for large game lists
   - Optimize JavaScript bundle size
   - Add service worker for offline support

5. **Cloudflare Deployment**
   - Deploy to Cloudflare Pages
   - Set up custom domain
   - Configure production environment variables
   - Set up monitoring and analytics

## 🏗️ Project Structure

```
webapp/
├── src/
│   ├── index.tsx           # Main Hono application with routes
│   ├── renderer.tsx        # HTML renderer with Tailwind setup
│   ├── types.ts            # TypeScript type definitions
│   └── mockData.ts         # Mock game data (10 games)
├── public/
│   └── static/
│       ├── app.js          # Client-side JavaScript
│       └── style.css       # Custom CSS styles
├── dist/                   # Build output (generated)
├── ecosystem.config.cjs    # PM2 configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite build config
├── wrangler.jsonc          # Cloudflare Workers config
└── README.md              # This file
```

## 💾 Data Architecture

### Data Models

**Game Model**
- Game metadata (ID, date/time, sport, week)
- Away and home team information
- Three betting markets (moneyline, spread, total)
- Public betting percentages
- EV indicators

**Team Model**
- Name and abbreviation
- Overall record (wins-losses)
- Conference record
- National ranking (optional)

**BetOption Model**
- Label (team/line description)
- Odds (American format: +150, -200, etc.)
- EV flag and value
- Market type (moneyline/spread/total)

### Storage Services

**Current**: In-memory mock data
**Recommended for Production**:
- **Cloudflare D1**: Store historical games and odds
- **Cloudflare KV**: Cache current odds and user preferences
- **Cloudflare R2**: Store exported reports and analytics

## 📖 User Guide

### Viewing Games
1. Open the application in your browser
2. Games are displayed in a vertical feed by default
3. Each card shows team matchups, records, and betting options

### Filtering
1. **By Sport**: Click sport category buttons at the top (NBA, NFL, etc.)
2. **By Week**: Use the week selector dropdown (for football)
3. Currently filtering NCAAFB (College Football) Week 15

### Understanding EV+ Indicators
- Green "EV+" badges show positive expected value bets
- Number indicates percentage edge (e.g., "EV+3.2" = 3.2% edge)
- Larger EV values represent better opportunities

### Selecting Bets
1. Click any bet option to select/highlight it
2. Selected bets show green border
3. Click again to deselect

### Public Betting
1. Toggle "Show Public Betting" switch
2. View betting percentage distribution
3. Use to identify sharp vs. public money

### Match Details
- Click "Match Details" button for more information
- (Currently placeholder - to be implemented)

## 🛠️ Technology Stack

- **Framework**: Hono (lightweight, fast)
- **Runtime**: Cloudflare Workers/Pages
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Font Awesome 6.4.0
- **Language**: TypeScript
- **Development**: PM2 + Wrangler
- **Version Control**: Git

## 🚀 Development

### Setup
```bash
cd /home/user/webapp
npm install
```

### Local Development
```bash
# Build first
npm run build

# Start with PM2
pm2 start ecosystem.config.cjs

# Check logs
pm2 logs --nostream

# Test
curl http://localhost:3000
```

### Commands
```bash
npm run build           # Build for production
npm run dev             # Vite dev server
npm run dev:sandbox     # Wrangler Pages dev server
npm run deploy          # Deploy to Cloudflare Pages
npm run clean-port      # Clean port 3000
npm run test            # Test local server
```

## 🌐 Deployment Status

- **Platform**: Cloudflare Pages (ready to deploy)
- **Status**: ✅ Development Active
- **Local URL**: http://localhost:3000
- **Public URL**: https://3000-iuqucy9do7pgtnix7db1s-b9b802c4.sandbox.novita.ai
- **Last Updated**: 2025-12-03

### Deploy to Production
```bash
# Setup Cloudflare API key first
# Then deploy
npm run deploy:prod
```

## 📝 API Documentation

### GET /api/games
Returns all available games with betting markets.

**Response Fields**:
- `id`: Unique game identifier
- `dateTime`: Game start time (string)
- `sport`: Sport category (NCAAFB, NBA, etc.)
- `week`: Week number (for football)
- `awayTeam`: Away team object
- `homeTeam`: Home team object
- `markets`: Object with moneyline, spread, total arrays
- `publicBetting`: Betting percentage distribution

## 🎨 Design Specifications

### Colors
- Background: `#1a1a1a` (dark-bg)
- Cards: `#252525` (card-bg)
- EV Green: `#00ff88` (ev-green)
- Secondary Text: `#a0a0a0` (text-secondary)
- Primary Text: `#ffffff` (white)

### Typography
- Font: System UI stack (Inter, Roboto, Segoe UI)
- Team Names: Bold, 16-18px
- Records: Regular, 12-14px
- Odds: Bold, 14px
- EV Badges: Bold, 12px

### Interactions
- Hover states: 150ms transitions
- Bet selection: Green border highlight
- EV badges: 2s pulse animation
- Sport categories: Background color change

## 🔒 Security Notes

- No sensitive data stored currently
- Ready for environment variables via `.dev.vars`
- CORS enabled for API routes
- XSS protection through proper escaping

## 📄 License

This project is a demonstration of sports betting analytics UI. 
Use responsibly and ensure compliance with local gambling laws.

## 🤝 Contributing

This is a demonstration project. For improvements:
1. Create detailed feature specifications
2. Follow existing code patterns
3. Test thoroughly before deployment
4. Update this README with changes

---

**Built with ❤️ using Hono, Cloudflare Pages, and Tailwind CSS**
