"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const battleService_1 = require("../services/battleService");
const validators_1 = require("../utils/validators");
const router = (0, express_1.Router)();
/**
 * POST / — Start a new battle between two fighters.
 */
router.post('/', (req, res) => {
    const validation = (0, validators_1.validateBattleRequest)(req.body);
    if (!validation.valid) {
        res.status(400).json({ success: false, error: 'Invalid battle request', details: validation.errors });
        return;
    }
    const { fighter1Id, fighter2Id } = req.body;
    const result = battleService_1.battleService.simulateBattle(fighter1Id, fighter2Id);
    if (!result) {
        res.status(404).json({ success: false, error: 'One or both fighters not found' });
        return;
    }
    res.status(201).json({ success: true, data: result });
});
/**
 * GET /history — Retrieve the full battle history.
 */
router.get('/history', (_req, res) => {
    const history = battleService_1.battleService.getBattleHistory();
    res.json({ success: true, data: history });
});
/**
 * GET /:id — Get a specific battle result.
 */
router.get('/:id', (req, res) => {
    const battle = battleService_1.battleService.getBattleById(req.params.id);
    if (!battle) {
        res.status(404).json({ success: false, error: 'Battle not found' });
        return;
    }
    res.json({ success: true, data: battle });
});
exports.default = router;
//# sourceMappingURL=battles.js.map