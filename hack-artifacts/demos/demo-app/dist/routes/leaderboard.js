"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leaderboardService_1 = require("../services/leaderboardService");
const router = (0, express_1.Router)();
/**
 * GET / — Get the full leaderboard.
 * NOTE: Will return 500 until leaderboardService is implemented.
 */
router.get('/', (_req, res) => {
    try {
        const leaderboard = leaderboardService_1.leaderboardService.getLeaderboard();
        res.json({ success: true, data: leaderboard });
    }
    catch (err) {
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
router.get('/top/:count', (req, res) => {
    try {
        const count = parseInt(req.params.count, 10);
        if (isNaN(count) || count < 1) {
            res.status(400).json({ success: false, error: 'Count must be a positive integer' });
            return;
        }
        const top = leaderboardService_1.leaderboardService.getTopFighters(count);
        res.json({ success: true, data: top });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: 'Leaderboard not implemented yet — this is your challenge!',
        });
    }
});
exports.default = router;
//# sourceMappingURL=leaderboard.js.map