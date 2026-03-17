import { LeaderboardEntry } from '../models/leaderboard';
import { fighterService } from './fighterService';

// TODO: Implement the leaderboard service
// This service should:
// 1. Calculate win rates from fighter records
// 2. Sort by win rate (descending), then by total wins
// 3. Track current winning/losing streaks
// 4. Support filtering by minimum battles played

export class LeaderboardService {
  /**
   * Builds the full leaderboard from current fighter records.
   * @returns Sorted array of leaderboard entries
   */
  getLeaderboard(): LeaderboardEntry[] {
    throw new Error('Not implemented');
  }

  /**
   * Returns the top N fighters by win rate.
   * @param count - Number of top fighters to return
   * @returns Array of top leaderboard entries
   */
  getTopFighters(count: number): LeaderboardEntry[] {
    throw new Error('Not implemented');
  }
}

export const leaderboardService = new LeaderboardService();
