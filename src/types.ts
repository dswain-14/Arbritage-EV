/**
 * Sports Betting Analytics - Type Definitions
 * Defines data structures for games, teams, betting options, and markets
 */

export type SportType = 'NBA' | 'NFL' | 'NCAAFB' | 'NCAAMB' | 'Soccer' | 'NHL' | 'MLB' | 'WNBA';

export interface Team {
  name: string;
  abbreviation: string;
  record: string; // Overall record (e.g., "8-4")
  conferenceRecord: string; // Conference record (e.g., "6-2")
  ranking?: number; // National ranking (optional)
}

export interface BetOption {
  label: string; // e.g., "TROY", "Over 51.5", "+23.5"
  odds: string; // American odds format (e.g., "+150", "-200", "47/3")
  hasEV: boolean; // Whether this bet has positive expected value
  evValue?: number; // Actual EV percentage (optional)
}

export interface BettingMarkets {
  moneyline: BetOption[];
  spread: BetOption[];
  total: BetOption[];
}

export interface PublicBetting {
  awayPercentage: number;
  homePercentage: number;
}

export interface Game {
  id: string;
  dateTime: string; // e.g., "Fri 7:00 PM"
  awayTeam: Team;
  homeTeam: Team;
  markets: BettingMarkets;
  publicBetting?: PublicBetting;
  sport: SportType;
  week?: string; // e.g., "Week 15" (primarily for football)
}

export interface FilterState {
  sport: SportType;
  week?: string;
  searchQuery?: string;
}
