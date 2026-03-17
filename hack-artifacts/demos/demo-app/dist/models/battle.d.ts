export interface BattleRound {
    round: number;
    attacker: string;
    defender: string;
    damage: number;
    attackerHp: number;
    defenderHp: number;
    narration: string;
}
export interface BattleResult {
    id: string;
    fighter1: string;
    fighter2: string;
    rounds: BattleRound[];
    winner: string;
    timestamp: Date;
}
//# sourceMappingURL=battle.d.ts.map