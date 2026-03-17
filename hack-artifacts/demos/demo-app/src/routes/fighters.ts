import { Router, Request, Response } from 'express';
import { fighterService } from '../services/fighterService';
import { validateFighterData } from '../utils/validators';

const router = Router();

/**
 * GET / — List all fighters in the arena.
 */
router.get('/', (_req: Request, res: Response) => {
  const fighters = fighterService.getAllFighters();
  res.json({ success: true, data: fighters });
});

/**
 * GET /:id — Get a single fighter by ID.
 */
router.get('/:id', (req: Request, res: Response) => {
  const fighter = fighterService.getFighterById(req.params.id);
  if (!fighter) {
    res.status(404).json({ success: false, error: 'Fighter not found' });
    return;
  }
  res.json({ success: true, data: fighter });
});

/**
 * POST / — Create a new fighter.
 */
router.post('/', (req: Request, res: Response) => {
  const validation = validateFighterData(req.body);
  if (!validation.valid) {
    res.status(400).json({ success: false, error: 'Invalid fighter data', details: validation.errors });
    return;
  }

  const { emoji, name, hp, attack, defense, special } = req.body;
  const fighter = fighterService.createFighter({ emoji, name, hp, attack, defense, special });
  res.status(201).json({ success: true, data: fighter });
});

/**
 * PUT /:id — Update an existing fighter.
 */
router.put('/:id', (req: Request, res: Response) => {
  const fighter = fighterService.updateFighter(req.params.id, req.body);
  if (!fighter) {
    res.status(404).json({ success: false, error: 'Fighter not found' });
    return;
  }
  res.json({ success: true, data: fighter });
});

/**
 * DELETE /:id — Remove a fighter from the arena.
 */
router.delete('/:id', (req: Request, res: Response) => {
  const deleted = fighterService.deleteFighter(req.params.id);
  if (!deleted) {
    res.status(404).json({ success: false, error: 'Fighter not found' });
    return;
  }
  res.json({ success: true, data: { message: 'Fighter deleted' } });
});

/**
 * POST /reset — Reset the roster to default fighters.
 */
router.post('/reset', (_req: Request, res: Response) => {
  fighterService.resetFighters();
  const fighters = fighterService.getAllFighters();
  res.json({ success: true, data: fighters });
});

export default router;
