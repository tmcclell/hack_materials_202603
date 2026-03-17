import { Fighter } from '../models/fighter';
/**
 * In-memory fighter data store and CRUD operations.
 */
declare class FighterService {
    private fighters;
    constructor();
    /**
     * Returns all fighters currently in the arena.
     * @returns Array of all fighters
     */
    getAllFighters(): Fighter[];
    /**
     * Finds a fighter by their unique ID.
     * @param id - The fighter's UUID
     * @returns The fighter if found, undefined otherwise
     */
    getFighterById(id: string): Fighter | undefined;
    /**
     * Creates a new fighter and adds them to the arena.
     * @param data - Partial fighter data (id, wins, losses auto-generated)
     * @returns The newly created fighter
     */
    createFighter(data: Omit<Fighter, 'id' | 'wins' | 'losses'>): Fighter;
    /**
     * Updates an existing fighter's data.
     * @param id - The fighter's UUID
     * @param data - Partial fighter data to update
     * @returns The updated fighter, or undefined if not found
     */
    updateFighter(id: string, data: Partial<Omit<Fighter, 'id'>>): Fighter | undefined;
    /**
     * Removes a fighter from the arena.
     * @param id - The fighter's UUID
     * @returns True if the fighter was deleted, false if not found
     */
    deleteFighter(id: string): boolean;
    /**
     * Resets the fighter roster to the default fighters.
     * All custom fighters and win/loss records are lost.
     */
    resetFighters(): void;
}
export declare const fighterService: FighterService;
export {};
//# sourceMappingURL=fighterService.d.ts.map