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
    <div class="min-h-screen">
      {/* Modern Sleek Header */}
      <header class="glass-card p-6 md:p-8 mb-8 mx-4 mt-4 md:mx-6 md:mt-6">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left: Logo & Title */}
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-xl flex items-center justify-center" style="background: var(--green-metallic); box-shadow: 0 4px 12px rgba(0,255,136,0.3), inset 0 1px 0 rgba(255,255,255,0.2);">
              <span class="text-white text-4xl font-black tracking-tighter" style="font-family: 'Orbitron', sans-serif;">G+</span>
            </div>
            <div>
              <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-white" style="font-family: 'Orbitron', monospace;">
                Week 15 Sports Analytics
              </h1>
              <p class="text-xs text-slate-400 mt-1 font-medium">
                Spread Betting Analysis · <span class="text-slate-500">Real-time Updates</span>
              </p>
            </div>
          </div>
          
          {/* Right: Key Metrics Grid */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {/* Total Bets */}
            <div class="text-center">
              <div class="text-xs text-slate-500 uppercase tracking-wider mb-1">Bets</div>
              <div class="text-2xl font-bold text-white number-display" style="font-family: 'JetBrains Mono', monospace;">10</div>
            </div>
            {/* EV+ */}
            <div class="text-center">
              <div class="text-xs text-emerald-400/70 uppercase tracking-wider mb-1">EV+</div>
              <div class="text-2xl font-bold text-emerald-400 number-display" style="font-family: 'JetBrains Mono', monospace;">23</div>
            </div>
            {/* Avg Value */}
            <div class="text-center">
              <div class="text-xs text-amber-400/70 uppercase tracking-wider mb-1">Avg Value</div>
              <div class="text-2xl font-bold text-amber-400 number-display" style="font-family: 'JetBrains Mono', monospace;">+3.1%</div>
            </div>
            {/* Ranked */}
            <div class="text-center">
              <div class="text-xs text-blue-400/70 uppercase tracking-wider mb-1">Ranked</div>
              <div class="text-2xl font-bold text-blue-400 number-display" style="font-family: 'JetBrains Mono', monospace;">6</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav class="glass-card mx-4 md:mx-6 mb-6">
        <div class="p-4 md:p-6">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <h2 class="text-xl font-bold text-white tracking-tight" style="font-family: 'Orbitron', monospace;">
              <i class="fas fa-football-ball mr-2 metallic-text"></i>
              College Football Championship Week
            </h2>
            
            <div class="flex items-center space-x-4">
              <select 
                id="week-selector"
                class="text-white px-4 py-2 rounded-lg cursor-pointer font-medium text-sm"
              >
                <option value="Week 14">Week 14</option>
                <option value="Week 15" selected>Week 15</option>
                <option value="Week 16">Week 16</option>
                <option value="Week 17">Week 17</option>
              </select>

              <div class="flex items-center space-x-3">
                <span class="text-sm text-slate-400 font-medium">Show Public Betting</span>
                <label class="toggle-switch">
                  <input type="checkbox" id="public-toggle" />
                  <span class="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Sport Categories */}
          <div class="flex flex-wrap gap-2">
            <button class="sport-category px-4 py-2 rounded-lg transition-all font-semibold text-xs" data-sport="NBA">NBA</button>
            <button class="sport-category px-4 py-2 rounded-lg transition-all font-semibold text-xs" data-sport="NFL">NFL</button>
            <button class="sport-category active px-4 py-2 rounded-lg transition-all font-semibold text-xs" data-sport="NCAAFB">NCAAFB</button>
            <button class="sport-category px-4 py-2 rounded-lg transition-all font-semibold text-xs" data-sport="NCAAMB">NCAAMB</button>
            <button class="sport-category px-4 py-2 rounded-lg transition-all font-semibold text-xs" data-sport="Soccer">Soccer</button>
            <button class="sport-category px-4 py-2 rounded-lg transition-all font-semibold text-xs" data-sport="NHL">NHL</button>
            <button class="sport-category px-4 py-2 rounded-lg transition-all font-semibold text-xs" data-sport="MLB">MLB</button>
            <button class="sport-category px-4 py-2 rounded-lg transition-all font-semibold text-xs" data-sport="WNBA">WNBA</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main class="mx-4 md:mx-6 mb-8">
        {/* Stats Summary Cards */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <div class="stat-card p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <div class="relative z-10 w-full text-center">
              <div class="flex items-center justify-center mb-3">
                <svg class="w-5 h-5 text-slate-500 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <p class="text-4xl font-bold text-white tracking-tight number-display mb-2" style="font-family: 'JetBrains Mono', monospace;">10</p>
              <p class="text-xs text-slate-400 uppercase tracking-wider font-medium">Total Games</p>
            </div>
          </div>

          <div class="stat-card p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <div class="relative z-10 w-full text-center">
              <div class="flex items-center justify-center mb-3">
                <svg class="w-5 h-5 text-emerald-500 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <p class="text-4xl font-bold text-emerald-400 tracking-tight number-display mb-2" style="font-family: 'JetBrains Mono', monospace;">23</p>
              <p class="text-xs text-emerald-400/70 uppercase tracking-wider font-medium">EV+ Opportunities</p>
            </div>
          </div>

          <div class="stat-card p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <div class="relative z-10 w-full text-center">
              <div class="flex items-center justify-center mb-3">
                <svg class="w-5 h-5 text-amber-500 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <p class="text-4xl font-bold text-amber-400 tracking-tight number-display mb-2" style="font-family: 'JetBrains Mono', monospace;">+3.1%</p>
              <p class="text-xs text-amber-400/70 uppercase tracking-wider font-medium">Avg Line Value</p>
            </div>
          </div>

          <div class="stat-card p-6 flex flex-col items-center justify-center relative overflow-hidden">
            <div class="relative z-10 w-full text-center">
              <div class="flex items-center justify-center mb-3">
                <svg class="w-5 h-5 text-blue-500 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <p class="text-4xl font-bold text-blue-400 tracking-tight number-display mb-2" style="font-family: 'JetBrains Mono', monospace;">6</p>
              <p class="text-xs text-blue-400/70 uppercase tracking-wider font-medium">Top Ranked Games</p>
            </div>
          </div>
        </div>

        {/* Games Container */}
        <div id="games-container" class="space-y-4">
          {/* Loading skeleton */}
          <div class="skeleton" style="height: 300px;"></div>
          <div class="skeleton" style="height: 300px;"></div>
        </div>

        {/* Footer Info */}
        <div class="mt-8 text-center text-slate-400 text-sm pb-8">
          <p class="mb-2">
            <i class="fas fa-info-circle mr-2 text-emerald-400"></i>
            EV+ indicators show bets with positive expected value based on advanced analytics
          </p>
          <p>
            <i class="fas fa-shield-alt mr-2 text-blue-400"></i>
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
