import { describe, it, expect, beforeEach } from 'vitest';
import { battleService } from '../src/services/battleService';
import { fighterService } from '../src/services/fighterService';

describe('BattleService', () => {
  beforeEach(() => {
    fighterService.resetFighters();
  });

  it('simulateBattle produces a winner', () => {
    const fighters = fighterService.getAllFighters();
    const f1 = fighters[0];
    const f2 = fighters[1];

    const result = battleService.simulateBattle(f1.id, f2.id);

    expect(result).not.toBeNull();
    expect(result!.winner).toBeDefined();
    expect([f1.id, f2.id]).toContain(result!.winner);
    expect(result!.rounds.length).toBeGreaterThan(0);
  });

  it('fighter records are updated after battle', () => {
    const fighters = fighterService.getAllFighters();
    const f1 = fighters[0];
    const f2 = fighters[1];

    const result = battleService.simulateBattle(f1.id, f2.id);
    expect(result).not.toBeNull();

    const updatedF1 = fighterService.getFighterById(f1.id)!;
    const updatedF2 = fighterService.getFighterById(f2.id)!;

    // One should have a win, the other a loss
    const totalWins = updatedF1.wins + updatedF2.wins;
    const totalLosses = updatedF1.losses + updatedF2.losses;
    expect(totalWins).toBe(1);
    expect(totalLosses).toBe(1);
  });

  it('returns null if fighter not found', () => {
    const fighters = fighterService.getAllFighters();
    const result = battleService.simulateBattle(fighters[0].id, 'nonexistent-id');
    expect(result).toBeNull();
  });

  // TODO: Test that defense actually reduces damage
  // This test would catch the operator precedence bug in calculateDamage!
  // Hint: compare damage dealt to a high-defense fighter vs a low-defense fighter
  // over many battles. High defense should result in significantly less damage.

  // TODO: Test battle with equal fighters has roughly 50/50 outcomes
  // Run 100 battles between two identical fighters and check that
  // the win rate for each is between 30% and 70%.
});
