class Ship{
  constructor(length){
    this.length = length;
    this.hits = 0;
  }

  getLength(){
    return this.length;
  }

  addHit(){
    this.hits++;
  }

  isShipSunk(){
    return this.hits >= this.length;
  }
}

module.exports = {Ship};