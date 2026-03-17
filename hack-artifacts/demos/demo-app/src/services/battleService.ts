import { v4 as uuidv4 } from 'uuid';
import { BattleResult, BattleRound } from '../models/battle';
import { Fighter } from '../models/fighter';
import { fighterService } from './fighterService';

/**
 * Battle engine — simulates turn-based combat between two emoji fighters.
 */
class BattleService {
  private battleHistory: BattleResult[] = [];

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
  private calculateDamage(attacker: Fighter, defender: Fighter): number {
    const baseDamage = Math.floor(attacker.attack - defender.defense / 2);
    const randomFactor = 0.8 + Math.random() * 0.4; // 0.8x – 1.2x multiplier
    const damage = Math.max(1, Math.round(baseDamage * randomFactor));
    return damage;
  }

  /**
   * Generates a fun narration line for a battle round.
   * @param attacker - The attacking fighter
   * @param defender - The defending fighter
   * @param damage - Damage dealt this round
   * @returns A narration string
   */
  private narrate(attacker: Fighter, defender: Fighter, damage: number): string {
    const actions = [
      `${attacker.emoji} ${attacker.name} lands a solid hit on ${defender.emoji} ${defender.name}!`,
      `${attacker.emoji} ${attacker.name} unleashes a fierce attack against ${defender.emoji} ${defender.name}!`,
      `${attacker.emoji} ${attacker.name} strikes ${defender.emoji} ${defender.name} with incredible force!`,
      `${attacker.emoji} ${attacker.name} charges at ${defender.emoji} ${defender.name} and connects!`,
      `${attacker.emoji} ${attacker.name} catches ${defender.emoji} ${defender.name} off guard!`,
    ];
    const action = actions[Math.floor(Math.random() * actions.length)];

    if (damage >= 15) {
      return `💥 CRITICAL! ${action} ${damage} damage!`;
    } else if (damage <= 3) {
      return `🛡️ Glancing blow! ${action} Only ${damage} damage.`;
    }
    return `⚔️ ${action} ${damage} damage.`;
  }

  /**
   * Simulates a full battle between two fighters.
   * Runs rounds until one fighter reaches 0 HP.
   * @param fighter1Id - UUID of the first fighter
   * @param fighter2Id - UUID of the second fighter
   * @returns The battle result with all rounds, or null if fighters not found
   */
  simulateBattle(fighter1Id: string, fighter2Id: string): BattleResult | null {
    const fighter1 = fighterService.getFighterById(fighter1Id);
    const fighter2 = fighterService.getFighterById(fighter2Id);

    if (!fighter1 || !fighter2) return null;

    // Clone HP for the battle so originals aren't mutated during simulation
    let hp1 = fighter1.hp;
    let hp2 = fighter2.hp;
    const rounds: BattleRound[] = [];
    let roundNum = 1;
    const maxRounds = 50; // safety valve

    while (hp1 > 0 && hp2 > 0 && roundNum <= maxRounds) {
      // Fighter 1 attacks Fighter 2
      const damage1 = this.calculateDamage(fighter1, fighter2);
      hp2 = Math.max(0, hp2 - damage1);
      rounds.push({
        round: roundNum,
        attacker: fighter1.id,
        defender: fighter2.id,
        damage: damage1,
        attackerHp: hp1,
        defenderHp: hp2,
        narration: this.narrate(fighter1, fighter2, damage1),
      });

      if (hp2 <= 0) break;

      // Fighter 2 attacks Fighter 1
      const damage2 = this.calculateDamage(fighter2, fighter1);
      hp1 = Math.max(0, hp1 - damage2);
      rounds.push({
        round: roundNum,
        attacker: fighter2.id,
        defender: fighter1.id,
        damage: damage2,
        attackerHp: hp2,
        defenderHp: hp1,
        narration: this.narrate(fighter2, fighter1, damage2),
      });

      roundNum++;
    }

    const winner = hp1 > 0 ? fighter1.id : fighter2.id;

    // Update win/loss records
    if (winner === fighter1.id) {
      fighterService.updateFighter(fighter1.id, { wins: fighter1.wins + 1 });
      fighterService.updateFighter(fighter2.id, { losses: fighter2.losses + 1 });
    } else {
      fighterService.updateFighter(fighter2.id, { wins: fighter2.wins + 1 });
      fighterService.updateFighter(fighter1.id, { losses: fighter1.losses + 1 });
    }

    const result: BattleResult = {
      id: uuidv4(),
      fighter1: fighter1.id,
      fighter2: fighter2.id,
      rounds,
      winner,
      timestamp: new Date(),
    };

    this.battleHistory.push(result);
    return result;
  }

  /**
   * Returns the full battle history.
   * @returns Array of all past battle results
   */
  getBattleHistory(): BattleResult[] {
    return [...this.battleHistory];
  }

  /**
   * Finds a specific battle by ID.
   * @param id - The battle's UUID
   * @returns The battle result if found, undefined otherwise
   */
  getBattleById(id: string): BattleResult | undefined {
    return this.battleHistory.find((b) => b.id === id);
  }
}

export const battleService = new BattleService();
