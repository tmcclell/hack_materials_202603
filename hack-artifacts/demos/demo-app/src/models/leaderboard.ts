export interface LeaderboardEntry {
  rank: number;
  fighterId: string;
  fighterName: string;
  fighterEmoji: string;
  wins: number;
  losses: number;
  winRate: number;
  streak: number;
}

// TODO: Add LeaderboardStats interface for aggregate data
// TODO: Add TimeRange type for filtered leaderboards
