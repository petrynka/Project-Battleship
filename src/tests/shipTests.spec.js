const {Ship} = require('../game/ship');

describe('Ship', () => {
    test('creates a ship with correct length', () => {
      const ship = new Ship(4);
      expect(ship.getLength()).toBe(4);
    });
  
    test('ship starts with 0 hits', () => {
      const ship = new Ship(3);
      expect(ship.isShipSunk()).toBe(false);
    });
  
    test('addHit increases hit count', () => {
      const ship = new Ship(3);
      ship.addHit();
      ship.addHit();
      expect(ship.hits).toBe(2);
    });
  
    test('ship is sunk when hits equals length', () => {
      const ship = new Ship(2);
      ship.addHit();
      ship.addHit();
      expect(ship.isShipSunk()).toBe(true);
    });
  
    test('ship is not sunk when hits less than length', () => {
      const ship = new Ship(3);
      ship.addHit();
      ship.addHit();
      expect(ship.isShipSunk()).toBe(false);
    });
  });