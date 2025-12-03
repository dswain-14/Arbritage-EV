/**
 * Sports Betting Analytics - Main Application
 * Client-side JavaScript for interactive functionality
 */

// Application state
let appState = {
  games: [],
  filteredGames: [],
  currentSport: 'NCAAFB',
  currentWeek: 'Week 15',
  showPublicBetting: false,
  selectedBets: []
};

// Initialize application
document.addEventListener('DOMContentLoaded', async () => {
  await loadGames();
  setupEventListeners();
  renderGames();
});

// Load games from API
async function loadGames() {
  try {
    const response = await fetch('/api/games');
    const data = await response.json();
    appState.games = data.games;
    filterGames();
  } catch (error) {
    console.error('Error loading games:', error);
    showError('Failed to load games. Please refresh the page.');
  }
}

// Filter games based on current state
function filterGames() {
  appState.filteredGames = appState.games.filter(game => {
    const sportMatch = game.sport === appState.currentSport;
    const weekMatch = !appState.currentWeek || game.week === appState.currentWeek;
    return sportMatch && weekMatch;
  });
}

// Setup event listeners
function setupEventListeners() {
  // Sport category filters
  document.querySelectorAll('.sport-category').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const sport = e.target.dataset.sport;
      if (sport) {
        appState.currentSport = sport;
        updateActiveCategory(sport);
        filterGames();
        renderGames();
      }
    });
  });

  // Week selector
  const weekSelector = document.getElementById('week-selector');
  if (weekSelector) {
    weekSelector.addEventListener('change', (e) => {
      appState.currentWeek = e.target.value;
      filterGames();
      renderGames();
    });
  }

  // Public betting toggle
  const publicToggle = document.getElementById('public-toggle');
  if (publicToggle) {
    publicToggle.addEventListener('change', (e) => {
      appState.showPublicBetting = e.target.checked;
      renderGames();
    });
  }
}

// Update active sport category
function updateActiveCategory(sport) {
  document.querySelectorAll('.sport-category').forEach(btn => {
    if (btn.dataset.sport === sport) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Render games
function renderGames() {
  const container = document.getElementById('games-container');
  if (!container) return;

  if (appState.filteredGames.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16">
        <i class="fas fa-basketball-ball text-6xl text-text-secondary mb-4"></i>
        <p class="text-xl text-text-secondary">No games available for ${appState.currentSport}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = appState.filteredGames.map(game => createGameCard(game)).join('');
  
  // Add event listeners to bet options
  document.querySelectorAll('.bet-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      toggleBetSelection(e.currentTarget);
    });
  });
}

// Create game card HTML
function createGameCard(game) {
  const { awayTeam, homeTeam, markets, dateTime, publicBetting } = game;
  
  return `
    <div class="game-card p-6 mb-4">
      <!-- Game Header -->
      <div class="flex justify-between items-center mb-4 pb-4 border-b border-slate-700/30">
        <div class="text-slate-400 text-sm font-medium" style="font-family: 'JetBrains Mono', monospace;">
          <i class="far fa-clock mr-2 text-emerald-400"></i>
          ${dateTime}
        </div>
        <button class="text-slate-400 hover:text-emerald-400 text-sm transition-all font-medium">
          <i class="fas fa-info-circle mr-1"></i>
          Match Details
        </button>
      </div>

      <!-- Teams -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-3 p-3 rounded-lg" style="background: rgba(15, 23, 42, 0.3);">
          <div class="flex items-center space-x-3">
            ${awayTeam.logo ? `<img src="${awayTeam.logo}" alt="${awayTeam.name}" class="w-10 h-10 object-contain" onerror="this.style.display='none'">` : ''}
            ${awayTeam.ranking ? `<span class="font-bold text-xs px-2 py-1 rounded-full" style="font-family: 'Orbitron', monospace; background: var(--green-metallic); color: white;">#${awayTeam.ranking}</span>` : ''}
            <span class="font-bold text-xl text-white" style="font-family: 'Orbitron', monospace;">${awayTeam.abbreviation || awayTeam.name}</span>
            <span class="text-slate-400 text-sm number-display">${awayTeam.record} (${awayTeam.conferenceRecord})</span>
          </div>
          <span class="text-slate-600 font-bold">AWAY</span>
        </div>
        <div class="flex items-center justify-between p-3 rounded-lg" style="background: rgba(15, 23, 42, 0.3);">
          <div class="flex items-center space-x-3">
            ${homeTeam.logo ? `<img src="${homeTeam.logo}" alt="${homeTeam.name}" class="w-10 h-10 object-contain" onerror="this.style.display='none'">` : ''}
            ${homeTeam.ranking ? `<span class="font-bold text-xs px-2 py-1 rounded-full" style="font-family: 'Orbitron', monospace; background: var(--green-metallic); color: white;">#${homeTeam.ranking}</span>` : ''}
            <span class="font-bold text-xl text-white" style="font-family: 'Orbitron', monospace;">${homeTeam.abbreviation || homeTeam.name}</span>
            <span class="text-slate-400 text-sm number-display">${homeTeam.record} (${homeTeam.conferenceRecord})</span>
          </div>
          <span class="text-slate-600 font-bold">HOME</span>
        </div>
      </div>

      <!-- Betting Markets -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <!-- Moneyline -->
        <div>
          <div class="text-slate-400 text-xs uppercase tracking-wider mb-3 font-bold" style="font-family: 'Orbitron', monospace;">
            <i class="fas fa-dollar-sign mr-1 text-emerald-400"></i>
            Moneyline
          </div>
          ${createBetOptions(markets.moneyline, game.id, 'moneyline')}
        </div>
        
        <!-- Spread -->
        <div>
          <div class="text-slate-400 text-xs uppercase tracking-wider mb-3 font-bold" style="font-family: 'Orbitron', monospace;">
            <i class="fas fa-chart-line mr-1 text-amber-400"></i>
            Spread
          </div>
          ${createBetOptions(markets.spread, game.id, 'spread')}
        </div>
        
        <!-- Total -->
        <div>
          <div class="text-slate-400 text-xs uppercase tracking-wider mb-3 font-bold" style="font-family: 'Orbitron', monospace;">
            <i class="fas fa-calculator mr-1 text-blue-400"></i>
            Total
          </div>
          ${createBetOptions(markets.total, game.id, 'total')}
        </div>
      </div>

      ${appState.showPublicBetting && publicBetting ? `
        <div class="mt-4 pt-4 border-t border-slate-700/30">
          <div class="text-slate-400 text-xs uppercase tracking-wider mb-3 font-bold" style="font-family: 'Orbitron', monospace;">
            <i class="fas fa-users mr-1 text-purple-400"></i>
            Public Betting
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="p-3 rounded-lg" style="background: rgba(15, 23, 42, 0.3);">
              <div class="text-xs text-slate-500 mb-1">${awayTeam.abbreviation}</div>
              <div class="text-lg font-bold text-white number-display">${publicBetting.awayPercentage}%</div>
            </div>
            <div class="p-3 rounded-lg" style="background: rgba(15, 23, 42, 0.3);">
              <div class="text-xs text-slate-500 mb-1">${homeTeam.abbreviation}</div>
              <div class="text-lg font-bold text-white number-display">${publicBetting.homePercentage}%</div>
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

// Create bet options HTML
function createBetOptions(options, gameId, market) {
  return options.map(option => `
    <button 
      class="bet-option w-full rounded-lg px-4 py-3 mb-2 text-left transition-all cursor-pointer relative"
      data-game-id="${gameId}"
      data-market="${market}"
      data-label="${option.label}"
    >
      <div class="flex justify-between items-center">
        <span class="font-semibold text-sm text-white">${option.label}</span>
        <span class="font-bold text-sm text-emerald-400 number-display">${option.odds}</span>
      </div>
      ${option.hasEV ? `
        <div class="absolute -top-1 -right-1 bg-ev-green text-dark-bg text-xs font-bold px-2 py-1 rounded ev-badge">
          EV+${option.evValue ? option.evValue.toFixed(1) : ''}
        </div>
      ` : ''}
    </button>
  `).join('');
}

// Toggle bet selection
function toggleBetSelection(element) {
  const isSelected = element.classList.contains('selected');
  
  if (isSelected) {
    element.classList.remove('selected');
    element.style.borderColor = '';
    element.style.backgroundColor = '';
  } else {
    element.classList.add('selected');
    element.style.borderColor = '#00ff88';
    element.style.backgroundColor = 'rgba(0, 255, 136, 0.1)';
    element.style.borderWidth = '2px';
  }
  
  // Update selected bets state
  const gameId = element.dataset.gameId;
  const market = element.dataset.market;
  const label = element.dataset.label;
  
  const betKey = `${gameId}-${market}-${label}`;
  
  if (isSelected) {
    appState.selectedBets = appState.selectedBets.filter(b => b !== betKey);
  } else {
    appState.selectedBets.push(betKey);
  }
  
  console.log('Selected bets:', appState.selectedBets.length);
}

// Show error message
function showError(message) {
  const container = document.getElementById('games-container');
  if (container) {
    container.innerHTML = `
      <div class="text-center py-16">
        <i class="fas fa-exclamation-triangle text-6xl text-red-500 mb-4"></i>
        <p class="text-xl text-red-500">${message}</p>
      </div>
    `;
  }
}

// Export functions for potential external use
window.SportsAnalytics = {
  loadGames,
  filterGames,
  renderGames,
  state: appState
};
