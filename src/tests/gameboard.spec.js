const {GameBoard} = require('../game/gameboard');
const {Ship} = require('../game/ship');

describe('GameBoard', () => {
    let board;

    beforeEach(() => {
        board = new GameBoard();
    });

    test('initialize with empty board', () =>{
        const boardState = board.getBoardState();
        expect(boardState.length).toBe(10);
        expect(boardState[0].length).toBe(10);
        expect(boardState[0][0]).toBe('~');
    });

    test('adds horizontal ship to board', () => {
        board.addShip('horizontal', { x: 0, y: 0 }, 3);
        const boardState = board.getBoardState();
        expect(boardState[0][0]).toBe('S');
        expect(boardState[0][1]).toBe('S');
        expect(boardState[0][2]).toBe('S');
    });
    
      test('adds vertical ship to board', () => {
        board.addShip('vertical', { x: 0, y: 0 }, 3);
        const boardState = board.getBoardState();
        expect(boardState[0][0]).toBe('S');
        expect(boardState[1][0]).toBe('S');
        expect(boardState[2][0]).toBe('S');
    });

    test('throws error when ship goes out of board horizontally', () =>{
        expect(() =>{
            board.addShip('horizontal', {x: 0, y: 8}, 3)
        }).toThrow('Ship out gameBoard');
    });

    test('throws error when ship goes out of board vertical', () =>{
        expect(() =>{
            board.addShip('vertical',{x:8,y:0},3);
        }).toThrow('Ship out gameBoard');
    });

    test('throws error when ships collide', () =>{
        board.addShip('horizontal', {x: 0, y: 0}, 3);
        expect(() => {
            board.addShip('vertical',{x:0,y:1},3);
        }).toThrow('Ships collision');
    });

    test('records a miss when attacking empty cell', () => {
        const result = board.receiveAttack(0,0);
        expect(result.result).toBe('miss');
        const boardState = board.getBoardState();
        expect(boardState[0][0]).toBe('O');
    });

    test('records a hit when attacking ship', () => {
        board.addShip('horizontal', { x: 0, y: 0 }, 3);
        const result = board.receiveAttack(0, 0);
        expect(result.result).toBe('hit');
        const boardState = board.getBoardState();
        expect(boardState[0][0]).toBe('X');
    });

    test('throws error when attacking already hit cell', () => {
        board.receiveAttack(0,0);
        expect(() => {
            board.receiveAttack(0,0);
        }).toThrow('Oops you already shot in this cell');
    });

    test('game is over when all ships are sunk', () => {
        const ship1 = board.addShip('horizontal',{x:0,y:0},1);
        const ship2 = board.addShip('horizontal',{x:0,y:3},1);
        expect(board.isGameOver()).toBe(false);

        board.receiveAttack(0,0);
        expect(board.isGameOver()).toBe(false);

        board.receiveAttack(0,3);
        expect(board.isGameOver()).toBe(true);
    });
});