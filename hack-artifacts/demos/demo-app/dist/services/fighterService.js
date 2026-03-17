"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fighterService = void 0;
const fighter_1 = require("../models/fighter");
const uuid_1 = require("uuid");
/**
 * In-memory fighter data store and CRUD operations.
 */
class FighterService {
    fighters = [];
    constructor() {
        this.resetFighters();
    }
    /**
     * Returns all fighters currently in the arena.
     * @returns Array of all fighters
     */
    getAllFighters() {
        return [...this.fighters];
    }
    /**
     * Finds a fighter by their unique ID.
     * @param id - The fighter's UUID
     * @returns The fighter if found, undefined otherwise
     */
    getFighterById(id) {
        return this.fighters.find((f) => f.id === id);
    }
    /**
     * Creates a new fighter and adds them to the arena.
     * @param data - Partial fighter data (id, wins, losses auto-generated)
     * @returns The newly created fighter
     */
    createFighter(data) {
        const fighter = {
            ...data,
            id: (0, uuid_1.v4)(),
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
    updateFighter(id, data) {
        const index = this.fighters.findIndex((f) => f.id === id);
        if (index === -1)
            return undefined;
        this.fighters[index] = { ...this.fighters[index], ...data };
        return this.fighters[index];
    }
    /**
     * Removes a fighter from the arena.
     * @param id - The fighter's UUID
     * @returns True if the fighter was deleted, false if not found
     */
    deleteFighter(id) {
        const index = this.fighters.findIndex((f) => f.id === id);
        if (index === -1)
            return false;
        this.fighters.splice(index, 1);
        return true;
    }
    /**
     * Resets the fighter roster to the default fighters.
     * All custom fighters and win/loss records are lost.
     */
    resetFighters() {
        this.fighters = fighter_1.DEFAULT_FIGHTERS.map((f) => ({ ...f, wins: 0, losses: 0 }));
    }
}
exports.fighterService = new FighterService();
//# sourceMappingURL=fighterService.js.map