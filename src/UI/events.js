// events.js - Handles game events and user interactions
const { DOMHandler } = require('./dom');

class EventHandler {
  constructor() {
    this.domHandler = new DOMHandler();
    this.isPlayerTurn = true;
    this.gameStarted = false; // Додаємо прапорець для відстеження, чи почалася гра
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Get computer board element
    const computerBoard = document.getElementById('computer-board');
    computerBoard.addEventListener('click', (e) => this.handleBoardClick(e));
    
    // Reset button
    const resetBtn = document.getElementById('reset-game');
    resetBtn.addEventListener('click', () => this.handleReset());
    
    // Random placement button
    const randomBtn = document.getElementById('random-placement');
    randomBtn.addEventListener('click', () => this.handleRandomPlacement());
  }

  handleBoardClick(event) {
    // Only allow clicks when it's player's turn
    if (!this.isPlayerTurn) return;
    
    const cell = event.target;
    
    // Ensure we clicked on a cell and not the board or row header
    if (!cell.classList.contains('cell')) return;
    
    const x = parseInt(cell.dataset.x);
    const y = parseInt(cell.dataset.y);
    
    // Prevent clicking on already attacked cells
    if (cell.classList.contains('hit') || cell.classList.contains('miss')) {
      this.domHandler.updateMessage('You already attacked this position! Try another one.');
      return;
    }
    
    // Якщо це перший хід гри, позначаємо що гра почалася і деактивуємо кнопку
    if (!this.gameStarted) {
      this.gameStarted = true;
      this.disableRandomPlacementButton();
    }
    
    this.processPlayerTurn(x, y);
  }
  
  processPlayerTurn(x, y) {
    try {
      // Execute player's move
      const result = this.domHandler.game.playerTurn(x, y);
      
      // Check for game over
      if (result && result.gameOver) {
        this.domHandler.renderBoards();
        this.domHandler.showGameOver('player');
        return;
      }
      
      // Check if hit - player gets another turn
      if (result && result.result === 'hit') {
        this.domHandler.renderBoards();
        this.domHandler.updateMessage('Hit! You get another turn. Attack again!');
        return;
      }
      
      // If miss, it's computer's turn
      this.isPlayerTurn = false;
      this.domHandler.updateMessage('Miss! Computer is thinking...');
      this.domHandler.renderBoards();
      
      // Give a slight delay before computer's move for better UX
      setTimeout(() => this.processComputerTurn(), 1000);
      
    } catch (error) {
      this.domHandler.updateMessage(`Error: ${error.message}`);
    }
  }
  
  processComputerTurn() {
    if (this.isPlayerTurn) return;
    
    // Execute computer's move
    const result = this.domHandler.game.computerTurn();
    
    // Check for game over
    if (result && result.gameOver) {
      this.domHandler.renderBoards();
      this.domHandler.showGameOver('computer');
      return;
    }
    
    // Check if hit - computer gets another turn
    if (result && result.result === 'hit') {
      this.domHandler.renderBoards();
      this.domHandler.updateMessage('Computer hit your ship! Computer gets another turn.');
      
      // Give a slight delay before computer's next move
      setTimeout(() => this.processComputerTurn(), 1000);
      return;
    }
    
    // If miss, it's player's turn again
    this.isPlayerTurn = true;
    this.domHandler.updateMessage('Computer missed! Your turn now.');
    this.domHandler.renderBoards();
  }
  
  handleReset() {
    this.domHandler.resetGame();
    this.isPlayerTurn = true;
    this.gameStarted = false; // Скидаємо прапорець початку гри
    this.enableRandomPlacementButton(); // Активуємо кнопку після скидання
  }

  handleRandomPlacement() {
    // Дозволяємо випадкове розміщення тільки якщо гра ще не почалася
    if (!this.gameStarted) {
      this.domHandler.playerRandomPlacement();
    }
  }
  
  // Метод для деактивації кнопки випадкового розміщення
  disableRandomPlacementButton() {
    const randomBtn = document.getElementById('random-placement');
    randomBtn.disabled = true;
    randomBtn.classList.add('disabled-button');
  }
  
  // Метод для активації кнопки випадкового розміщення
  enableRandomPlacementButton() {
    const randomBtn = document.getElementById('random-placement');
    randomBtn.disabled = false;
    randomBtn.classList.remove('disabled-button');
  }
  
  initialize() {
    this.domHandler.initialize();
    this.gameStarted = false; // Встановлюємо початковий стан гри
    this.enableRandomPlacementButton(); // Впевнюємося, що кнопка активна на початку
  }
}

module.exports = { EventHandler };