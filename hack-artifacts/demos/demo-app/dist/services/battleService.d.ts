import { BattleResult } from '../models/battle';
/**
 * Battle engine — simulates turn-based combat between two emoji fighters.
 */
declare class BattleService {
    private battleHistory;
    /**
     * Calculates damage for a single attack.
     *
     * INTENTIONAL BUG: Operator precedence issue!
     * Written as: Math.floor(attacker.attack - defender.defense / 2)
     * This evaluates as: attack - (defense / 2) due to JS operator precedence
     * Intended logic: (attack - defense) / 2
     * Result: defense is much weaker than intended, making glass cannons overpowered.
     *
     * @param attacker - The attacking fighter
     * @param defender - The defending fighter
     * @returns Damage dealt (minimum 1)
     */
    private calculateDamage;
    /**
     * Generates a fun narration line for a battle round.
     * @param attacker - The attacking fighter
     * @param defender - The defending fighter
     * @param damage - Damage dealt this round
     * @returns A narration string
     */
    private narrate;
    /**
     * Simulates a full battle between two fighters.
     * Runs rounds until one fighter reaches 0 HP.
     * @param fighter1Id - UUID of the first fighter
     * @param fighter2Id - UUID of the second fighter
     * @returns The battle result with all rounds, or null if fighters not found
     */
    simulateBattle(fighter1Id: string, fighter2Id: string): BattleResult | null;
    /**
     * Returns the full battle history.
     * @returns Array of all past battle results
     */
    getBattleHistory(): BattleResult[];
    /**
     * Finds a specific battle by ID.
     * @param id - The battle's UUID
     * @returns The battle result if found, undefined otherwise
     */
    getBattleById(id: string): BattleResult | undefined;
}
export declare const battleService: BattleService;
export {};
//# sourceMappingURL=battleService.d.ts.map