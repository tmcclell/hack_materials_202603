"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fighterService_1 = require("../services/fighterService");
const validators_1 = require("../utils/validators");
const router = (0, express_1.Router)();
/**
 * GET / — List all fighters in the arena.
 */
router.get('/', (_req, res) => {
    const fighters = fighterService_1.fighterService.getAllFighters();
    res.json({ success: true, data: fighters });
});
/**
 * GET /:id — Get a single fighter by ID.
 */
router.get('/:id', (req, res) => {
    const fighter = fighterService_1.fighterService.getFighterById(req.params.id);
    if (!fighter) {
        res.status(404).json({ success: false, error: 'Fighter not found' });
        return;
    }
    res.json({ success: true, data: fighter });
});
/**
 * POST / — Create a new fighter.
 */
router.post('/', (req, res) => {
    const validation = (0, validators_1.validateFighterData)(req.body);
    if (!validation.valid) {
        res.status(400).json({ success: false, error: 'Invalid fighter data', details: validation.errors });
        return;
    }
    const { emoji, name, hp, attack, defense, special } = req.body;
    const fighter = fighterService_1.fighterService.createFighter({ emoji, name, hp, attack, defense, special });
    res.status(201).json({ success: true, data: fighter });
});
/**
 * PUT /:id — Update an existing fighter.
 */
router.put('/:id', (req, res) => {
    const fighter = fighterService_1.fighterService.updateFighter(req.params.id, req.body);
    if (!fighter) {
        res.status(404).json({ success: false, error: 'Fighter not found' });
        return;
    }
    res.json({ success: true, data: fighter });
});
/**
 * DELETE /:id — Remove a fighter from the arena.
 */
router.delete('/:id', (req, res) => {
    const deleted = fighterService_1.fighterService.deleteFighter(req.params.id);
    if (!deleted) {
        res.status(404).json({ success: false, error: 'Fighter not found' });
        return;
    }
    res.json({ success: true, data: { message: 'Fighter deleted' } });
});
/**
 * POST /reset — Reset the roster to default fighters.
 */
router.post('/reset', (_req, res) => {
    fighterService_1.fighterService.resetFighters();
    const fighters = fighterService_1.fighterService.getAllFighters();
    res.json({ success: true, data: fighters });
});
exports.default = router;
//# sourceMappingURL=fighters.js.map