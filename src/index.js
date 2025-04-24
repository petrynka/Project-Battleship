import './style.css';
const { EventHandler } = require('./UI/events');

document.addEventListener('DOMContentLoaded', () => {
  const game = new EventHandler();
  game.initialize();
  
  // Handle Play Again button in game over screen
  document.getElementById('play-again').addEventListener('click', () => {
    game.handleReset();
    document.getElementById('game-over').classList.add('hidden');
  });

  document.getElementById('random-placement').addEventListener('click', () =>{
    game.handleRandomPlacement();
  });
});



