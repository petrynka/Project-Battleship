// dom.js - Handles DOM manipulation and UI rendering
const { Battleship } = require('../game/game');

class DOMHandler {
  constructor() {
    this.game = new Battleship();
    this.playerBoardElement = document.getElementById('player-board');
    this.computerBoardElement = document.getElementById('computer-board');
    this.messageElement = document.getElementById('message');
    this.resetButton = document.getElementById('reset-game');
  }

  initialize() {
    this.game.setup();
    this.renderBoards();
    this.updateMessage('Game is ready! You can randomly place your ships before starting or click on the computer\'s board to attack.');
  }

  renderBoards() {
    this.renderBoard(this.playerBoardElement, this.game.playerBoard.getBoardState(), true);
    
    const computerBoardView = this.game.computer.gameBoard.getBoardState().map(row => {
      return row.map(cell => {
        if (cell === 'S') return '~'; // Hide computer's ships
        return cell;
      });
    });
    
    this.renderBoard(this.computerBoardElement, computerBoardView, false);
  }

  renderBoard(boardElement, boardState, isPlayerBoard) {
    boardElement.innerHTML = '';
    
    // Create board header (column numbers)
    const headerRow = document.createElement('div');
    headerRow.className = 'board-header';
    
    const emptyCell = document.createElement('div');
    emptyCell.className = 'header-cell';
    headerRow.appendChild(emptyCell);
    
    for (let i = 0; i < 10; i++) {
      const headerCell = document.createElement('div');
      headerCell.className = 'header-cell';
      headerCell.textContent = i;
      headerRow.appendChild(headerCell);
    }
    
    boardElement.appendChild(headerRow);
    
    // Create board rows
    for (let i = 0; i < 10; i++) {
      const row = document.createElement('div');
      row.className = 'board-row';
      
      // Row label (row number)
      const rowLabel = document.createElement('div');
      rowLabel.className = 'row-label';
      rowLabel.textContent = i;
      row.appendChild(rowLabel);
      
      // Cells
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.x = i;
        cell.dataset.y = j;
        
        // Apply cell state styling
        switch (boardState[i][j]) {
          case 'S':
            cell.classList.add('ship');
            break;
          case 'O':
            cell.classList.add('miss');
            break;
          case 'X':
            cell.classList.add('hit');
            break;
          default:
            cell.classList.add('water');
        }
        
        row.appendChild(cell);
      }
      
      boardElement.appendChild(row);
    }
  }

  updateMessage(message) {
    this.messageElement.textContent = message;
  }

  showGameOver(winner) {
    const gameOverMessage = winner === 'player' 
      ? 'Congratulations! You won the battle!' 
      : 'You lost! The computer sank all your ships.';
    
    this.updateMessage(gameOverMessage);
    document.getElementById('game-over').classList.remove('hidden');
    document.getElementById('game-over-message').textContent = gameOverMessage;
  }

  playerRandomPlacement() {
    this.game.placePlayerShipsRandomly();
    this.renderBoards();
    this.updateMessage('Your ships were randomly placed! Click on the computer\'s board to start attacking.');
  }

  resetGame() {
    this.game = new Battleship();
    this.game.setup();
    this.renderBoards();
    this.updateMessage('Game reset! You can randomly place your ships before starting or click on the computer\'s board to attack.');
    document.getElementById('game-over').classList.add('hidden');
  }
}

module.exports = { DOMHandler };