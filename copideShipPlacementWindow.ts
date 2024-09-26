//https://github.com/wolftec241/Odin-Battleship/blob/main/src/scripts/EnemyAi.ts
//shipPlacementWindow.ts
import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";

export function ShipPlacementWindow(playerBoard: Gameboard, onFinish: () => void) {
    document.querySelector('.main-window').classList.add('non-interactive');
    const GRID_SIZE = 10;
    const ships = [
        { name: 'Carrier', length: 5 },
        { name: 'Battleship', length: 4 },
        { name: 'Cruiser', length: 3 },
        { name: 'Submarine', length: 3 },
        { name: 'Destroyer', length: 2 }
    ];
    let currentShipIndex = 0;
    let currentOrientation: 'horizontal' | 'vertical' = 'vertical';

    // Create the ship placement window
    function createPlacementWindow(): void {
        const placementWindow = document.createElement('div');
        placementWindow.classList.add('placement-window');

        const title = document.createElement('h2');
        title.textContent = 'Place Your Ships';
        placementWindow.appendChild(title);

        
        const grid = createPlacementGrid();
        placementWindow.appendChild(grid);

        const controls = createControls();
        placementWindow.appendChild(controls);

        document.body.insertBefore(placementWindow, document.body.firstChild);
    }

    // Create the grid for ship placement
    function createPlacementGrid(): HTMLElement {
        const grid = document.createElement('div');
        grid.classList.add('board');
        grid.classList.add('placement-board')

        for (let col = 0; col < GRID_SIZE; col++) {
            for (let row = 0; row < GRID_SIZE; row++) {
                const cell = document.createElement('div');
                cell.classList.add('placement-cell');
                cell.dataset.row = row.toString();
                cell.dataset.col = col.toString();
                cell.addEventListener('click', () => placeShip(col, row));
                cell.addEventListener('mouseover', () => previewShip(col, row));
                cell.addEventListener('mouseout', clearPreview);
                grid.appendChild(cell);
            }
        }

        return grid;
    }

    //Restart placement bo
    function restart(){
        currentShipIndex = 0;
        playerBoard = new Gameboard('player');
        const cells = document.querySelectorAll('.placement-cell');
        cells.forEach((cell) => {
            cell.classList.remove('ship-placed');
        });
    }

    // Create control elements (rotate button and ship info)
    function createControls(): HTMLElement {
        const controls = document.createElement('div');
        controls.classList.add('placement-controls');

        const rotateButton = document.createElement('button');
        rotateButton.textContent = 'Rotate Ship';
        rotateButton.addEventListener('click', rotateShip);
        controls.appendChild(rotateButton);

        const RandomBtn = document.createElement('button');
        RandomBtn.textContent = 'Randomize';
        RandomBtn.addEventListener('click', randomize);
        controls.appendChild(RandomBtn);

        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.addEventListener('click', restart);
        controls.appendChild(restartButton);

        return controls;
    }

    function randomize(){
        playerBoard = new Gameboard('player');
        playerBoard.placeShipsRandomly();
        finishPlacement();
    }

    // Rotate the current ship orientation
    function rotateShip(): void {
        currentOrientation = currentOrientation === 'horizontal' ? 'vertical' : 'horizontal';
    }

    // Place a ship on the board
    function placeShip(col: number, row: number): void {
        const currentShip = ships[currentShipIndex];
        const ship = new Ship(currentShip.name,currentShip.length, currentOrientation);
        if (playerBoard.placeShip(ship, col, row)) {
            updateGrid(col, row);
            currentShipIndex++;
            
            if (currentShipIndex >= ships.length) {
                finishPlacement();
            }
        }
    }

    // Update the grid after placing a ship
    function updateGrid(col: number, row: number): void {
        const currentShip = ships[currentShipIndex];
        const cells = document.querySelectorAll('.placement-cell');
        if (currentOrientation == 'vertical')
            for (let i = 0; i < currentShip.length; i++) {
                let index = col * GRID_SIZE + (row + i);
                cells[index].classList.add('ship-placed');
            }
        if (currentOrientation == 'horizontal')
            for (let i = 0; i < currentShip.length; i++) {
                let index = (col + i) * GRID_SIZE + row;
                cells[index].classList.add('ship-placed');
            }
    }

    // Preview ship placement on hover
    function previewShip(col: number, row: number): void {
        clearPreview();
        const currentShip = ships[currentShipIndex];
        const cells = document.querySelectorAll('.placement-cell');
        
        for (let i = 0; i < currentShip.length; i++) {
            const previewRow = currentOrientation === 'vertical' ? row + i : row;
            const previewCol = currentOrientation === 'horizontal' ? col + i : col;
            
            if (previewRow < GRID_SIZE && previewCol < GRID_SIZE) {
                const index = previewCol * GRID_SIZE + previewRow;
                if (isValidPlacement(row, col, currentShip.length)) {
                    cells[index].classList.add('preview');
                } else {
                    cells[index].classList.add('invalid-preview');
                }
            }
        }
    }

    // Check if the current placement is valid
    function isValidPlacement(row: number, col: number, shipLength: number): boolean {
        if (currentOrientation === 'horizontal') {
            return col + shipLength <= GRID_SIZE;
        } else {
            return row + shipLength <= GRID_SIZE;
        }
    }

    // Clear the ship placement preview
    function clearPreview(): void {
        const cells = document.querySelectorAll('.placement-cell');
        cells.forEach((cell) => {
            cell.classList.remove('preview');
            cell.classList.remove('invalid-preview');
        });
    }

    function updatePlayerBoard(): void {
        const playerBoardElement = document.getElementById('player-board');
        if (!playerBoardElement) return;

        const cells = playerBoardElement.querySelectorAll('.cell');
        
        for (let col = 0; col < GRID_SIZE; col++) {
            for (let row = 0; row < GRID_SIZE; row++) {
                const ship = playerBoard.getShipAt(col, row);
                if (ship) {
                    const index = col * GRID_SIZE + row;
                    cells[index].classList.add('ship');
                }
            }
        }
    }

    // Finish the ship placement phase
    function finishPlacement(): void {
        const placementWindow = document.querySelector('.placement-window');
        if (placementWindow) {
            placementWindow.remove();
        }
        document.querySelector('.main-window').classList.remove('non-interactive');
        
        // Update the player's board with placed ships
        updatePlayerBoard();

        onFinish();
    }

    // Initialize the ship placement window
    createPlacementWindow();
}