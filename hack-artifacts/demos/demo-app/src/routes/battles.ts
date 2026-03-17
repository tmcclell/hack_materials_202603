import { Router, Request, Response } from 'express';
import { battleService } from '../services/battleService';
import { validateBattleRequest } from '../utils/validators';

const router = Router();

/**
 * POST / — Start a new battle between two fighters.
 */
router.post('/', (req: Request, res: Response) => {
  const validation = validateBattleRequest(req.body);
  if (!validation.valid) {
    res.status(400).json({ success: false, error: 'Invalid battle request', details: validation.errors });
    return;
  }

  const { fighter1Id, fighter2Id } = req.body;
  const result = battleService.simulateBattle(fighter1Id, fighter2Id);

  if (!result) {
    res.status(404).json({ success: false, error: 'One or both fighters not found' });
    return;
  }

  res.status(201).json({ success: true, data: result });
});

/**
 * GET /history — Retrieve the full battle history.
 */
router.get('/history', (_req: Request, res: Response) => {
  const history = battleService.getBattleHistory();
  res.json({ success: true, data: history });
});

/**
 * GET /:id — Get a specific battle result.
 */
router.get('/:id', (req: Request, res: Response) => {
  const battle = battleService.getBattleById(req.params.id);
  if (!battle) {
    res.status(404).json({ success: false, error: 'Battle not found' });
    return;
  }
  res.json({ success: true, data: battle });
});

export default router;
