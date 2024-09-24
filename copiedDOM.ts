//https://github.com/wolftec241/Odin-Battleship/blob/main/src/scripts/Dom.ts

import { Gameboard } from "./copiedGameboard.ts";
import { ShipPlacementWindow } from "./ShipPlacementWindow";
import { EnemyAi } from "./EnemyAi";

export function Dom() {
    const GRID_SIZE = 10;
    let playerBoard: Gameboard;
    let enemyBoard: Gameboard;
    let aiPlayer: EnemyAi;
    let isPlayerTurn: boolean;
    // Create a grid for the game board
    function createGrid(containerId: string, gameboard: Gameboard): void {
        const container = document.getElementById(`${containerId}-board`);
        if (!container) return;

        container.innerHTML = ''; // Clear existing content
        container.classList.add('board');

        for (let col = 0; col < GRID_SIZE; col++) {
            for (let row = 0; row < GRID_SIZE; row++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add(`${containerId}-cell`)
                cell.dataset.row = row.toString();
                cell.dataset.col = col.toString();
                
                if (containerId === 'enemy')
                    cell.addEventListener('click', () => handleCellClick(col, row, gameboard, cell));

                container.appendChild(cell);
            }
        }
    }

    // Handle click events on the enemy board
    function handleCellClick(col: number, row: number, gameboard: Gameboard, cell: HTMLElement): void {
        if (!isPlayerTurn || cell.classList.contains('hit') || cell.classList.contains('miss')) {
            return; // Ignore clicks when it's not player's turn or on already attacked cells
        }

        isPlayerTurn = false; // Immediately set to false to prevent multiple clicks

        const result = gameboard.receiveAttack(col, row);
        updateCellAppearance(cell, result);

        if (result) {
            const ship = gameboard.getShipAt(col, row);
            if (ship && ship.isSunk()) {
                console.log(ship.getName() + ' is sunk');
                updateGrid('enemy', gameboard);
            }
            if (gameboard.allShipsSunk()) {
                GameFinale(gameboard);
                return;
            }
            // Player gets another turn
            setTimeout(() => {
                isPlayerTurn = true;
                playerTurn();
            }, 500);
        } else {
            setTimeout(aiTurn, 500);
        }
    }

    function playerTurn(): void {
        isPlayerTurn = true;
    }

    function aiTurn(): void {
        if (isPlayerTurn) return; // Safeguard against unexpected calls

        const [aiCol, aiRow] = aiPlayer.makeMove();
        const playerCell = document.querySelector(`.player-cell[data-col="${aiCol}"][data-row="${aiRow}"]`) as HTMLElement;
        
        if (playerBoard.getShipAt(aiCol, aiRow)) {
            playerCell.classList.add('hit');
            updateGrid('player', playerBoard);
            if (playerBoard.allShipsSunk()) {
                GameFinale(playerBoard);
                return;
            }
            // AI gets another turn
            setTimeout(aiTurn, 500);
        } else {
            playerCell.classList.add('miss');
            updateGrid('player', playerBoard);
            isPlayerTurn = true;
            playerTurn();
        }
    }

    //Adding miss class to cell that near the sunk ship
    function updateGrid(containerId: string, gameboard: Gameboard) {
        const container = document.getElementById(`${containerId}-board`);
        if (!container) return;

        const cells = container.querySelectorAll('.cell');
        const missedCells = gameboard.getAllMissedCells();

        missedCells.forEach(([col, row]) => {
            const index = col * GRID_SIZE + row;
            cells[index].classList.add('miss');
        });
    }

    //Function to update cell appearance
    function updateCellAppearance(cell: HTMLElement, isHit: boolean): void {
        if (isHit) {
            cell.classList.add('hit');
            cell.textContent = '×'; // Add an "X" mark for hits
        } else {
            cell.classList.add('miss');
            cell.textContent = '○'; // Add a circle for misses
        }
    }


    // Create a new game board
    function createNewGameboard(): void {
        deletePrevBoards();

        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');

        const playerBoardContainer = createBoardContainer('Player');
        const EnemyBoardContainer = createBoardContainer('Enemy');

        gameContainer.appendChild(playerBoardContainer);
        gameContainer.appendChild(EnemyBoardContainer);

        const mainContent = document.getElementById('app') || document.body;
        mainContent.appendChild(gameContainer);

        playerBoard = new Gameboard('player');
        enemyBoard = new Gameboard('enemy');
        aiPlayer = new EnemyAi(playerBoard);


        // Create the player's board first
        createGrid('player', playerBoard);

        // Place enemy ships randomly
        enemyBoard.placeShipsRandomly();

        // Then open the ship placement window
        ShipPlacementWindow(playerBoard, () => {
            // Only create the enemy board after ship placement is complete
            createGrid('enemy', enemyBoard);
            isPlayerTurn = true;
        });

        // Start with ship placement for the player
        
    }


    // Create a container for a game board
    function createBoardContainer(title: string): HTMLElement {
        const container = document.createElement('div');
        container.classList.add('board-container');

        const header = document.createElement('h2');
        header.textContent = `${title} board`;

        const board = document.createElement('div');
        board.id = `${title.toLowerCase()}-board`;
        board.classList.add('board');

        container.appendChild(header);
        container.appendChild(board);

        return container;
    }

    // Remove any existing game boards
    function deletePrevBoards() {
        let gameContainers = document.querySelectorAll('.game-container');
        gameContainers.forEach(container => {
            container.remove();
        });
    }

    // Initialize the game
    function startUp() {
        createNewGameboard();
        const newGameBtn = document.getElementById('new-game-btn');
        if (newGameBtn) {
            newGameBtn.addEventListener('click', createNewGameboard);
        } else {
            console.error("New game button not found");
        }
    }

    //Finish the game
    function GameFinale(gameboard: Gameboard): void {
        const gameContainer = document.querySelector('.game-container') as HTMLElement;
        const finaleResult = document.getElementById('finale-result') as HTMLElement;
        if (gameboard.getName() === 'player') {
            finaleResult.textContent = 'AI Wins';
            alert("AI wins!");
        } else {
            finaleResult.textContent = 'Player Wins';
            alert("Player wins!");
        }
        gameContainer.style.pointerEvents = 'none';
    }

    return {
        startUp
    };
}