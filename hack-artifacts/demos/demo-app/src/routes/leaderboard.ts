import { Router, Request, Response } from 'express';
import { leaderboardService } from '../services/leaderboardService';

const router = Router();

/**
 * GET / — Get the full leaderboard.
 * NOTE: Will return 500 until leaderboardService is implemented.
 */
router.get('/', (_req: Request, res: Response) => {
  try {
    const leaderboard = leaderboardService.getLeaderboard();
    res.json({ success: true, data: leaderboard });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Leaderboard not implemented yet — this is your challenge!',
    });
  }
});

/**
 * GET /top/:count — Get the top N fighters.
 * NOTE: Will return 500 until leaderboardService is implemented.
 */
router.get('/top/:count', (req: Request, res: Response) => {
  try {
    const count = parseInt(req.params.count, 10);
    if (isNaN(count) || count < 1) {
      res.status(400).json({ success: false, error: 'Count must be a positive integer' });
      return;
    }
    const top = leaderboardService.getTopFighters(count);
    res.json({ success: true, data: top });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Leaderboard not implemented yet — this is your challenge!',
    });
  }
});

export default router;
