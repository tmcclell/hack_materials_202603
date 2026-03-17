import { describe, it, expect, beforeEach } from 'vitest';
import { fighterService } from '../src/services/fighterService';

describe('FighterService', () => {
  beforeEach(() => {
    fighterService.resetFighters();
  });

  it('getAllFighters returns default fighters', () => {
    const fighters = fighterService.getAllFighters();
    expect(fighters).toHaveLength(8);
    expect(fighters.map((f) => f.name)).toContain('Blaze');
    expect(fighters.map((f) => f.name)).toContain('Frost');
  });

  it('createFighter adds a new fighter', () => {
    const newFighter = fighterService.createFighter({
      emoji: '🐉',
      name: 'Drake',
      hp: 120,
      attack: 15,
      defense: 12,
      special: 'Dragon Breath — scorches everything in sight',
    });

    expect(newFighter.id).toBeDefined();
    expect(newFighter.name).toBe('Drake');
    expect(newFighter.wins).toBe(0);
    expect(newFighter.losses).toBe(0);

    const all = fighterService.getAllFighters();
    expect(all).toHaveLength(9);
  });

  it('getFighterById returns the correct fighter', () => {
    const all = fighterService.getAllFighters();
    const first = all[0];

    const found = fighterService.getFighterById(first.id);
    expect(found).toBeDefined();
    expect(found!.name).toBe(first.name);
    expect(found!.emoji).toBe(first.emoji);
  });

  it('getFighterById returns undefined for unknown id', () => {
    const found = fighterService.getFighterById('nonexistent-id');
    expect(found).toBeUndefined();
  });

  it('deleteFighter removes a fighter', () => {
    const all = fighterService.getAllFighters();
    const target = all[0];

    const deleted = fighterService.deleteFighter(target.id);
    expect(deleted).toBe(true);

    const remaining = fighterService.getAllFighters();
    expect(remaining).toHaveLength(7);
    expect(remaining.find((f) => f.id === target.id)).toBeUndefined();
  });

  it('deleteFighter returns false for unknown id', () => {
    const deleted = fighterService.deleteFighter('nonexistent-id');
    expect(deleted).toBe(false);
  });

  it('resetFighters restores defaults', () => {
    // Add a custom fighter then reset
    fighterService.createFighter({
      emoji: '👻',
      name: 'Ghost',
      hp: 80,
      attack: 13,
      defense: 7,
      special: 'Phase Out — becomes untouchable for one round',
    });
    expect(fighterService.getAllFighters()).toHaveLength(9);

    fighterService.resetFighters();
    const fighters = fighterService.getAllFighters();
    expect(fighters).toHaveLength(8);
    expect(fighters.every((f) => f.wins === 0 && f.losses === 0)).toBe(true);
  });
});
