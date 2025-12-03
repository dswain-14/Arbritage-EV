/**
 * College Football Data Service
 * Fetches real CFB game data with team information and logos
 */

interface CFBDGame {
  id: number;
  season: number;
  week: number;
  seasonType: string;
  startDate: string;
  homeTeam: string;
  homeId: number;
  homeConference: string;
  homePoints: number | null;
  awayTeam: string;
  awayId: number;
  awayConference: string;
  awayPoints: number | null;
  completed: boolean;
}

interface CFBDTeam {
  id: number;
  school: string;
  mascot: string;
  abbreviation: string;
  color: string;
  alt_color: string;
  logos: string[];
  conference: string;
}

export async function fetchCFBGames(year: number = 2025, week: number = 1): Promise<CFBDGame[]> {
  const CFBD_API_KEY = 'T0iV2bfp8UKCf8rTV12qsS26USzyDYiVNA7x6WbaV3NOvewuDQnJlv3NfPzr3f/p';
  
  try {
    // Try postseason first (bowl games), then regular season
    let response = await fetch(
      `https://api.collegefootballdata.com/games?year=${year}&seasonType=postseason&division=fbs`,
      {
        headers: {
          'Authorization': `Bearer ${CFBD_API_KEY}`,
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`CFBD API error: ${response.status}`);
    }

    let games: CFBDGame[] = await response.json();
    
    // If no postseason games, try regular season week 1 for next year
    if (games.length === 0) {
      response = await fetch(
        `https://api.collegefootballdata.com/games?year=${year + 1}&week=1&seasonType=regular&division=fbs`,
        {
          headers: {
            'Authorization': `Bearer ${CFBD_API_KEY}`,
            'Accept': 'application/json'
          }
        }
      );
      games = await response.json();
    }
    
    return games.slice(0, 10); // Get first 10 games
  } catch (error) {
    console.error('Error fetching CFB games:', error);
    return [];
  }
}

export async function fetchTeamInfo(teamName: string): Promise<CFBDTeam | null> {
  const CFBD_API_KEY = 'T0iV2bfp8UKCf8rTV12qsS26USzyDYiVNA7x6WbaV3NOvewuDQnJlv3NfPzr3f/p';
  
  try {
    const response = await fetch(
      `https://api.collegefootballdata.com/teams?school=${encodeURIComponent(teamName)}`,
      {
        headers: {
          'Authorization': `Bearer ${CFBD_API_KEY}`,
          'Accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      return null;
    }

    const teams: CFBDTeam[] = await response.json();
    return teams.length > 0 ? teams[0] : null;
  } catch (error) {
    console.error(`Error fetching team info for ${teamName}:`, error);
    return null;
  }
}

// ESPN CDN URLs for team logos (fallback)
export function getESPNTeamLogo(teamName: string): string {
  // Convert team name to ESPN slug (lowercase, replace spaces with hyphens)
  const slug = teamName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
  return `https://a.espncdn.com/i/teamlogos/ncaa/500/${slug}.png`;
}

// Generate mock betting odds (we'll enhance this later with real odds API)
export function generateMockOdds(homeTeam: string, awayTeam: string) {
  const homeWins = Math.random() > 0.5;
  const spread = (Math.random() * 20 - 10).toFixed(1);
  const total = (Math.random() * 20 + 40).toFixed(1);
  
  return {
    moneyline: [
      { 
        label: awayTeam, 
        odds: homeWins ? `+${Math.floor(Math.random() * 300 + 100)}` : `-${Math.floor(Math.random() * 300 + 100)}`,
        hasEV: Math.random() > 0.7,
        evValue: Math.random() * 5 + 1
      },
      { 
        label: homeTeam, 
        odds: !homeWins ? `+${Math.floor(Math.random() * 300 + 100)}` : `-${Math.floor(Math.random() * 300 + 100)}`,
        hasEV: Math.random() > 0.7,
        evValue: Math.random() * 5 + 1
      }
    ],
    spread: [
      { 
        label: `${awayTeam} ${parseFloat(spread) > 0 ? '+' : ''}${spread}`,
        odds: "-110",
        hasEV: Math.random() > 0.6,
        evValue: Math.random() * 4 + 1
      },
      { 
        label: `${homeTeam} ${parseFloat(spread) < 0 ? '+' : ''}${-parseFloat(spread)}`,
        odds: "-110",
        hasEV: Math.random() > 0.6,
        evValue: Math.random() * 4 + 1
      }
    ],
    total: [
      { 
        label: `Over ${total}`,
        odds: "-110",
        hasEV: Math.random() > 0.65,
        evValue: Math.random() * 3.5 + 1
      },
      { 
        label: `Under ${total}`,
        odds: "-110",
        hasEV: Math.random() > 0.65,
        evValue: Math.random() * 3.5 + 1
      }
    ]
  };
}
