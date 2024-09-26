//https://github.com/wolftec241/Odin-Battleship/blob/main/src/scripts/EnemyAi.ts
//EnemyAi.ts
import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";

export class EnemyAi {
    private GRID_SIZE: number;
    private opponentBoard: Gameboard;
    private lastHit: [number, number] | null;
    private potentialTargets: [number, number][];
    private attackedCells: Set<string>;

    constructor(opponentBoard: Gameboard) {
        this.opponentBoard = opponentBoard;
        this.GRID_SIZE = 10;
        this.lastHit = null;
        this.potentialTargets = [];
        this.attackedCells = new Set();
    }

    makeMove(): [number, number] {
        let move: [number, number];

        if (this.lastHit && this.potentialTargets.length > 0) {
            move = this.targetAdjacentCells();
        } else {
            move = this.randomMove();
        }

        this.attackedCells.add(`${move[0]},${move[1]}`);
        return move;
    }

    private targetAdjacentCells(): [number, number] {
        while (this.potentialTargets.length > 0) {
            const move = this.potentialTargets.pop();
            if (!this.attackedCells.has(`${move[0]},${move[1]}`)) {
                const result = this.opponentBoard.receiveAttack(move[0], move[1]);

                if (result) {
                    this.lastHit = move;
                    this.addAdjacentCells(move);
                }

                return move;
            }
        }

        // If all potential targets have been attacked, reset and make a random move
        this.lastHit = null;
        return this.randomMove();
    }

    private randomMove(): [number, number] {
        let move: [number, number];
        do {
            move = [
                Math.floor(Math.random() * this.GRID_SIZE),
                Math.floor(Math.random() * this.GRID_SIZE)
            ];
        } while (this.attackedCells.has(`${move[0]},${move[1]}`));

        const result = this.opponentBoard.receiveAttack(move[0], move[1]);

        if (result) {
            this.lastHit = move;
            this.addAdjacentCells(move);
        }

        return move;
    }

    private addAdjacentCells(move: [number, number]): void {
        const [col, row] = move;
        const adjacentCells: [number, number][] = [
            [col - 1, row], [col + 1, row], [col, row - 1], [col, row + 1]
        ];

        this.potentialTargets = adjacentCells.filter(([col, row]) => 
            col >= 0 && col < this.GRID_SIZE && row >= 0 && row < this.GRID_SIZE &&
            !this.attackedCells.has(`${col},${row}`)
        ).concat(this.potentialTargets);
    }
}