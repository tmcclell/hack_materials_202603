import { Fighter, DEFAULT_FIGHTERS } from '../models/fighter';
import { v4 as uuidv4 } from 'uuid';

/**
 * In-memory fighter data store and CRUD operations.
 */
class FighterService {
  private fighters: Fighter[] = [];

  constructor() {
    this.resetFighters();
  }

  /**
   * Returns all fighters currently in the arena.
   * @returns Array of all fighters
   */
  getAllFighters(): Fighter[] {
    return [...this.fighters];
  }

  /**
   * Finds a fighter by their unique ID.
   * @param id - The fighter's UUID
   * @returns The fighter if found, undefined otherwise
   */
  getFighterById(id: string): Fighter | undefined {
    return this.fighters.find((f) => f.id === id);
  }

  /**
   * Creates a new fighter and adds them to the arena.
   * @param data - Partial fighter data (id, wins, losses auto-generated)
   * @returns The newly created fighter
   */
  createFighter(data: Omit<Fighter, 'id' | 'wins' | 'losses'>): Fighter {
    const fighter: Fighter = {
      ...data,
      id: uuidv4(),
      wins: 0,
      losses: 0,
    };
    this.fighters.push(fighter);
    return fighter;
  }

  /**
   * Updates an existing fighter's data.
   * @param id - The fighter's UUID
   * @param data - Partial fighter data to update
   * @returns The updated fighter, or undefined if not found
   */
  updateFighter(id: string, data: Partial<Omit<Fighter, 'id'>>): Fighter | undefined {
    const index = this.fighters.findIndex((f) => f.id === id);
    if (index === -1) return undefined;

    this.fighters[index] = { ...this.fighters[index], ...data };
    return this.fighters[index];
  }

  /**
   * Removes a fighter from the arena.
   * @param id - The fighter's UUID
   * @returns True if the fighter was deleted, false if not found
   */
  deleteFighter(id: string): boolean {
    const index = this.fighters.findIndex((f) => f.id === id);
    if (index === -1) return false;

    this.fighters.splice(index, 1);
    return true;
  }

  /**
   * Resets the fighter roster to the default fighters.
   * All custom fighters and win/loss records are lost.
   */
  resetFighters(): void {
    this.fighters = DEFAULT_FIGHTERS.map((f) => ({ ...f, wins: 0, losses: 0 }));
  }
}

export const fighterService = new FighterService();
