import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { mockGames } from './mockData'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Use renderer middleware
app.use(renderer)

// API Routes
app.get('/api/games', (c) => {
  return c.json({ games: mockGames })
})

// Main application route
app.get('/', (c) => {
  return c.render(
    <div class="min-h-screen bg-dark-bg">
      {/* Navigation Bar */}
      <nav class="bg-card-bg border-b border-gray-800 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            {/* Logo */}
            <div class="flex items-center space-x-3">
              <i class="fas fa-chart-line text-ev-green text-2xl"></i>
              <h1 class="text-xl font-bold">Sports Analytics</h1>
            </div>

            {/* Week Selector */}
            <div class="flex items-center space-x-4">
              <select 
                id="week-selector"
                class="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:border-ev-green cursor-pointer"
              >
                <option value="Week 14">Week 14</option>
                <option value="Week 15" selected>Week 15</option>
                <option value="Week 16">Week 16</option>
                <option value="Week 17">Week 17</option>
              </select>

              {/* User Icon */}
              <button class="text-text-secondary hover:text-white transition-all">
                <i class="fas fa-user-circle text-2xl"></i>
              </button>
            </div>
          </div>

          {/* Sport Categories */}
          <div class="mt-4 flex flex-wrap gap-2">
            <button class="sport-category px-4 py-2 rounded transition-all font-medium" data-sport="NBA">NBA</button>
            <button class="sport-category px-4 py-2 rounded transition-all font-medium" data-sport="NFL">NFL</button>
            <button class="sport-category active px-4 py-2 rounded transition-all font-medium" data-sport="NCAAFB">NCAAFB</button>
            <button class="sport-category px-4 py-2 rounded transition-all font-medium" data-sport="NCAAMB">NCAAMB</button>
            <button class="sport-category px-4 py-2 rounded transition-all font-medium" data-sport="Soccer">Soccer</button>
            <button class="sport-category px-4 py-2 rounded transition-all font-medium" data-sport="NHL">NHL</button>
            <button class="sport-category px-4 py-2 rounded transition-all font-medium" data-sport="MLB">MLB</button>
            <button class="sport-category px-4 py-2 rounded transition-all font-medium" data-sport="WNBA">WNBA</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main class="max-w-7xl mx-auto px-4 py-6">
        {/* Controls */}
        <div class="mb-6 flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <h2 class="text-2xl font-bold">
              <i class="fas fa-football-ball mr-2 text-ev-green"></i>
              College Football Championship Week
            </h2>
          </div>

          {/* Public Betting Toggle */}
          <div class="flex items-center space-x-3">
            <span class="text-sm text-text-secondary">Show Public Betting</span>
            <label class="toggle-switch">
              <input type="checkbox" id="public-toggle" />
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>

        {/* Stats Summary */}
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div class="bg-card-bg rounded-lg p-4">
            <div class="text-text-secondary text-sm mb-1">Total Games</div>
            <div class="text-2xl font-bold">10</div>
          </div>
          <div class="bg-card-bg rounded-lg p-4">
            <div class="text-text-secondary text-sm mb-1">EV+ Opportunities</div>
            <div class="text-2xl font-bold text-ev-green">23</div>
          </div>
          <div class="bg-card-bg rounded-lg p-4">
            <div class="text-text-secondary text-sm mb-1">Avg Line Value</div>
            <div class="text-2xl font-bold">+3.1%</div>
          </div>
          <div class="bg-card-bg rounded-lg p-4">
            <div class="text-text-secondary text-sm mb-1">Top Ranked Games</div>
            <div class="text-2xl font-bold">6</div>
          </div>
        </div>

        {/* Games Container */}
        <div id="games-container" class="space-y-4">
          {/* Loading skeleton */}
          <div class="bg-card-bg rounded-lg p-4 skeleton" style="height: 300px;"></div>
          <div class="bg-card-bg rounded-lg p-4 skeleton" style="height: 300px;"></div>
        </div>

        {/* Footer Info */}
        <div class="mt-8 text-center text-text-secondary text-sm pb-8">
          <p class="mb-2">
            <i class="fas fa-info-circle mr-2"></i>
            EV+ indicators show bets with positive expected value based on advanced analytics
          </p>
          <p>
            <i class="fas fa-shield-alt mr-2"></i>
            All odds are updated in real-time from multiple sportsbooks
          </p>
        </div>
      </main>

      {/* Load JavaScript */}
      <script src="/static/app.js"></script>
    </div>
  )
})

export default app
