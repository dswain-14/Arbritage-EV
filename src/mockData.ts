/**
 * Mock Data for Sports Betting Analytics
 * Contains realistic college football games with various betting scenarios
 */

import { Game } from './types';

export const mockGames: Game[] = [
  {
    id: '1',
    dateTime: 'Fri 7:00 PM',
    sport: 'NCAAFB',
    week: 'Week 15',
    awayTeam: {
      name: 'TROY',
      abbreviation: 'TROY',
      record: '8-4',
      conferenceRecord: '6-2',
    },
    homeTeam: {
      name: 'JMU',
      abbreviation: 'JMU',
      record: '11-1',
      conferenceRecord: '7-1',
      ranking: 3,
    },
    markets: {
      moneyline: [
        { label: 'TROY', odds: '47/3', hasEV: false },
        { label: 'JMU', odds: '1/17', hasEV: true, evValue: 3.2 },
      ],
      spread: [
        { label: 'TROY +23.5', odds: '-110', hasEV: true, evValue: 2.8 },
        { label: 'JMU -23.5', odds: '-110', hasEV: false },
      ],
      total: [
        { label: 'Over 51.5', odds: '-110', hasEV: false },
        { label: 'Under 51.5', odds: '-110', hasEV: false },
      ],
    },
    publicBetting: {
      awayPercentage: 35,
      homePercentage: 65,
    },
  },
  {
    id: '2',
    dateTime: 'Sat 12:00 PM',
    sport: 'NCAAFB',
    week: 'Week 15',
    awayTeam: {
      name: 'OHIO',
      abbreviation: 'OHIO',
      record: '9-3',
      conferenceRecord: '7-1',
    },
    homeTeam: {
      name: 'BGSU',
      abbreviation: 'BGSU',
      record: '6-6',
      conferenceRecord: '5-3',
    },
    markets: {
      moneyline: [
        { label: 'OHIO', odds: '-245', hasEV: false },
        { label: 'BGSU', odds: '+195', hasEV: true, evValue: 4.5 },
      ],
      spread: [
        { label: 'OHIO -6.5', odds: '-110', hasEV: false },
        { label: 'BGSU +6.5', odds: '-110', hasEV: false },
      ],
      total: [
        { label: 'Over 47.5', odds: '-105', hasEV: true, evValue: 1.9 },
        { label: 'Under 47.5', odds: '-115', hasEV: false },
      ],
    },
    publicBetting: {
      awayPercentage: 68,
      homePercentage: 32,
    },
  },
  {
    id: '3',
    dateTime: 'Sat 3:00 PM',
    sport: 'NCAAFB',
    week: 'Week 15',
    awayTeam: {
      name: 'GEORGIA',
      abbreviation: 'UGA',
      record: '10-2',
      conferenceRecord: '6-2',
      ranking: 5,
    },
    homeTeam: {
      name: 'TEXAS',
      abbreviation: 'TEX',
      record: '11-1',
      conferenceRecord: '7-1',
      ranking: 2,
    },
    markets: {
      moneyline: [
        { label: 'UGA', odds: '+140', hasEV: true, evValue: 5.3 },
        { label: 'TEX', odds: '-165', hasEV: false },
      ],
      spread: [
        { label: 'UGA +3.5', odds: '-108', hasEV: true, evValue: 3.1 },
        { label: 'TEX -3.5', odds: '-112', hasEV: false },
      ],
      total: [
        { label: 'Over 49.5', odds: '-110', hasEV: false },
        { label: 'Under 49.5', odds: '-110', hasEV: true, evValue: 2.4 },
      ],
    },
    publicBetting: {
      awayPercentage: 42,
      homePercentage: 58,
    },
  },
  {
    id: '4',
    dateTime: 'Sat 4:00 PM',
    sport: 'NCAAFB',
    week: 'Week 15',
    awayTeam: {
      name: 'CLEMSON',
      abbreviation: 'CLEM',
      record: '9-3',
      conferenceRecord: '7-1',
      ranking: 17,
    },
    homeTeam: {
      name: 'SMU',
      abbreviation: 'SMU',
      record: '11-1',
      conferenceRecord: '8-0',
      ranking: 8,
    },
    markets: {
      moneyline: [
        { label: 'CLEM', odds: '+125', hasEV: false },
        { label: 'SMU', odds: '-150', hasEV: false },
      ],
      spread: [
        { label: 'CLEM +2.5', odds: '-115', hasEV: false },
        { label: 'SMU -2.5', odds: '-105', hasEV: true, evValue: 2.1 },
      ],
      total: [
        { label: 'Over 55.5', odds: '-108', hasEV: true, evValue: 3.7 },
        { label: 'Under 55.5', odds: '-112', hasEV: false },
      ],
    },
    publicBetting: {
      awayPercentage: 48,
      homePercentage: 52,
    },
  },
  {
    id: '5',
    dateTime: 'Sat 7:30 PM',
    sport: 'NCAAFB',
    week: 'Week 15',
    awayTeam: {
      name: 'ARIZONA',
      abbreviation: 'ARIZ',
      record: '4-8',
      conferenceRecord: '2-7',
    },
    homeTeam: {
      name: 'OREGON',
      abbreviation: 'ORE',
      record: '12-0',
      conferenceRecord: '9-0',
      ranking: 1,
    },
    markets: {
      moneyline: [
        { label: 'ARIZ', odds: '+850', hasEV: true, evValue: 6.8 },
        { label: 'ORE', odds: '-1400', hasEV: false },
      ],
      spread: [
        { label: 'ARIZ +20.5', odds: '-110', hasEV: false },
        { label: 'ORE -20.5', odds: '-110', hasEV: false },
      ],
      total: [
        { label: 'Over 53.5', odds: '-115', hasEV: false },
        { label: 'Under 53.5', odds: '-105', hasEV: true, evValue: 1.5 },
      ],
    },
    publicBetting: {
      awayPercentage: 15,
      homePercentage: 85,
    },
  },
  {
    id: '6',
    dateTime: 'Sat 8:00 PM',
    sport: 'NCAAFB',
    week: 'Week 15',
    awayTeam: {
      name: 'IOWA STATE',
      abbreviation: 'ISU',
      record: '10-2',
      conferenceRecord: '7-2',
      ranking: 16,
    },
    homeTeam: {
      name: 'PENN STATE',
      abbreviation: 'PSU',
      record: '11-1',
      conferenceRecord: '8-1',
      ranking: 4,
    },
    markets: {
      moneyline: [
        { label: 'ISU', odds: '+280', hasEV: false },
        { label: 'PSU', odds: '-350', hasEV: true, evValue: 2.9 },
      ],
      spread: [
        { label: 'ISU +10.5', odds: '-108', hasEV: true, evValue: 4.2 },
        { label: 'PSU -10.5', odds: '-112', hasEV: false },
      ],
      total: [
        { label: 'Over 44.5', odds: '-110', hasEV: false },
        { label: 'Under 44.5', odds: '-110', hasEV: false },
      ],
    },
    publicBetting: {
      awayPercentage: 38,
      homePercentage: 62,
    },
  },
  {
    id: '7',
    dateTime: 'Sat 10:00 PM',
    sport: 'NCAAFB',
    week: 'Week 15',
    awayTeam: {
      name: 'TULANE',
      abbreviation: 'TUL',
      record: '9-3',
      conferenceRecord: '7-1',
      ranking: 20,
    },
    homeTeam: {
      name: 'ARMY',
      abbreviation: 'ARMY',
      record: '11-1',
      conferenceRecord: '9-0',
      ranking: 19,
    },
    markets: {
      moneyline: [
        { label: 'TUL', odds: '+165', hasEV: true, evValue: 3.6 },
        { label: 'ARMY', odds: '-198', hasEV: false },
      ],
      spread: [
        { label: 'TUL +5.5', odds: '-112', hasEV: false },
        { label: 'ARMY -5.5', odds: '-108', hasEV: false },
      ],
      total: [
        { label: 'Over 48.5', odds: '-110', hasEV: true, evValue: 2.7 },
        { label: 'Under 48.5', odds: '-110', hasEV: false },
      ],
    },
    publicBetting: {
      awayPercentage: 44,
      homePercentage: 56,
    },
  },
  {
    id: '8',
    dateTime: 'Sun 2:00 PM',
    sport: 'NCAAFB',
    week: 'Week 15',
    awayTeam: {
      name: 'BOISE STATE',
      abbreviation: 'BSU',
      record: '11-1',
      conferenceRecord: '7-1',
      ranking: 10,
    },
    homeTeam: {
      name: 'UNLV',
      abbreviation: 'UNLV',
      record: '10-2',
      conferenceRecord: '6-2',
      ranking: 22,
    },
    markets: {
      moneyline: [
        { label: 'BSU', odds: '-180', hasEV: false },
        { label: 'UNLV', odds: '+155', hasEV: true, evValue: 4.1 },
      ],
      spread: [
        { label: 'BSU -3.5', odds: '-115', hasEV: false },
        { label: 'UNLV +3.5', odds: '-105', hasEV: true, evValue: 3.3 },
      ],
      total: [
        { label: 'Over 56.5', odds: '-112', hasEV: false },
        { label: 'Under 56.5', odds: '-108', hasEV: false },
      ],
    },
    publicBetting: {
      awayPercentage: 59,
      homePercentage: 41,
    },
  },
  {
    id: '9',
    dateTime: 'Sun 4:00 PM',
    sport: 'NCAAFB',
    week: 'Week 15',
    awayTeam: {
      name: 'LOUISIANA',
      abbreviation: 'ULL',
      record: '10-2',
      conferenceRecord: '7-1',
    },
    homeTeam: {
      name: 'MARSHALL',
      abbreviation: 'MARS',
      record: '9-3',
      conferenceRecord: '7-1',
    },
    markets: {
      moneyline: [
        { label: 'ULL', odds: '-135', hasEV: true, evValue: 2.3 },
        { label: 'MARS', odds: '+115', hasEV: false },
      ],
      spread: [
        { label: 'ULL -2.5', odds: '-110', hasEV: false },
        { label: 'MARS +2.5', odds: '-110', hasEV: true, evValue: 1.8 },
      ],
      total: [
        { label: 'Over 52.5', odds: '-105', hasEV: false },
        { label: 'Under 52.5', odds: '-115', hasEV: true, evValue: 2.6 },
      ],
    },
    publicBetting: {
      awayPercentage: 52,
      homePercentage: 48,
    },
  },
  {
    id: '10',
    dateTime: 'Sun 7:00 PM',
    sport: 'NCAAFB',
    week: 'Week 15',
    awayTeam: {
      name: 'MIAMI (OH)',
      abbreviation: 'MIA',
      record: '9-3',
      conferenceRecord: '7-1',
    },
    homeTeam: {
      name: 'TOLEDO',
      abbreviation: 'TOL',
      record: '7-5',
      conferenceRecord: '4-4',
    },
    markets: {
      moneyline: [
        { label: 'MIA', odds: '-210', hasEV: false },
        { label: 'TOL', odds: '+175', hasEV: false },
      ],
      spread: [
        { label: 'MIA -4.5', odds: '-108', hasEV: true, evValue: 2.5 },
        { label: 'TOL +4.5', odds: '-112', hasEV: false },
      ],
      total: [
        { label: 'Over 45.5', odds: '-110', hasEV: true, evValue: 3.4 },
        { label: 'Under 45.5', odds: '-110', hasEV: false },
      ],
    },
    publicBetting: {
      awayPercentage: 61,
      homePercentage: 39,
    },
  },
];
