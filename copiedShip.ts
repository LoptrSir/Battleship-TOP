//https://github.com/wolftec241/Odin-Battleship/blob/main/src/scripts/EnemyAi.ts
// Ship class represents a ship in the Battleship game
//ships.ts
export class Ship {
    name:string;
    shipLength: number;
    numberOfHits: number;
    sunk: boolean;
    orientation:'vertical'| 'horizontal';
  
    // Constructor initializes a ship with a given length
    constructor(name:string, length: number, orientation: 'vertical'| 'horizontal') {
      this.name = name;
        this.shipLength = length;
        this.numberOfHits = 0;
        this.sunk = false;
        this.orientation = orientation;
    }
  
    // Returns the length of the ship
    public getLength(): number {
        return this.shipLength;
    }
  
    public getName():string{
      return this.name;
    }
  
    // Returns the number of hits the ship has taken
    public getNumberOfHits(): number {
        return this.numberOfHits;
    }
  
    // Checks if the ship is sunk
    public isSunk(): boolean {
        return this.sunk;
    }
  
    // Registers a hit on the ship and checks if it's sunk
    public getHit(): void {
        this.numberOfHits++;
        if (this.numberOfHits >= this.shipLength) {
            this.sunk = true;
        }
    }
  
    isVertical(){
      if(this.orientation === 'vertical')
          return true;
      return false;
    }
  }