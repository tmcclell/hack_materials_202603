import { LeaderboardEntry } from '../models/leaderboard';
export declare class LeaderboardService {
    /**
     * Builds the full leaderboard from current fighter records.
     * @returns Sorted array of leaderboard entries
     */
    getLeaderboard(): LeaderboardEntry[];
    /**
     * Returns the top N fighters by win rate.
     * @param count - Number of top fighters to return
     * @returns Array of top leaderboard entries
     */
    getTopFighters(count: number): LeaderboardEntry[];
}
export declare const leaderboardService: LeaderboardService;
//# sourceMappingURL=leaderboardService.d.ts.map