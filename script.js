// Морський бій - проста консольна гра

// Визначаємо розмір поля
const BOARD_SIZE = 5;

// Створюємо пусту дошку (заповнюємо водою - '~')
function createBoard() {
  const board = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    board[i] = [];
    for (let j = 0; j < BOARD_SIZE; j++) {
      board[i][j] = '~'; // '~' символізує воду
    }
  }
  return board;
}

// Розміщуємо кораблі на дошці
function placeShips(board, numShips) {
  let shipsPlaced = 0;
  
  while (shipsPlaced < numShips) {
    const row = Math.floor(Math.random() * BOARD_SIZE);
    const col = Math.floor(Math.random() * BOARD_SIZE);
    
    // Перевіряємо, чи клітинка вільна
    if (board[row][col] === '~') {
      board[row][col] = 'S'; // 'S' символізує корабель
      shipsPlaced++;
    }
  }
  
  return board;
}

// Відображення дошки (для гравця)
function printBoard(board, hideShips) {
  console.log('  ' + Array.from({ length: BOARD_SIZE }, (_, i) => i).join(' '));
  
  for (let i = 0; i < BOARD_SIZE; i++) {
    let rowStr = i + ' ';
    
    for (let j = 0; j < BOARD_SIZE; j++) {
      // Приховуємо кораблі противника
      if (hideShips && board[i][j] === 'S') {
        rowStr += '~ ';
      } else {
        rowStr += board[i][j] + ' ';
      }
    }
    
    console.log(rowStr);
  }
}

// Перевірка, чи всі кораблі знищені
function allShipsDestroyed(board) {
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j] === 'S') {
        return false;
      }
    }
  }
  return true;
}

// Хід комп'ютера
function computerMove(playerBoard) {
  while (true) {
    const row = Math.floor(Math.random() * BOARD_SIZE);
    const col = Math.floor(Math.random() * BOARD_SIZE);
    
    // Перевіряємо, чи вже стріляли в цю клітинку
    if (playerBoard[row][col] !== 'X' && playerBoard[row][col] !== 'O') {
      if (playerBoard[row][col] === 'S') {
        playerBoard[row][col] = 'X'; // Влучення
        console.log(`Комп'ютер вистрілив у (${row}, ${col}) і влучив!`);
      } else {
        playerBoard[row][col] = 'O'; // Промах
        console.log(`Комп'ютер вистрілив у (${row}, ${col}) і промахнувся.`);
      }
      break;
    }
  }
  return playerBoard;
}

// Головна функція гри
function playGame() {
  console.log("Ласкаво просимо до гри Морський Бій!");
  
  // Створюємо дошки
  const playerBoard = createBoard();
  const computerBoard = createBoard();
  
  // Розміщуємо кораблі
  placeShips(playerBoard, 3);
  placeShips(computerBoard, 3);
  
  let gameOver = false;
  let playerTurn = true;
  
  while (!gameOver) {
    console.log("\nВаша дошка:");
    printBoard(playerBoard, false);
    
    console.log("\nДошка комп'ютера:");
    printBoard(computerBoard, true);
    
    if (playerTurn) {
      // Хід гравця (тут можна додати реальний ввід від користувача)
      const row = Math.floor(Math.random() * BOARD_SIZE);
      const col = Math.floor(Math.random() * BOARD_SIZE);
      
      if (computerBoard[row][col] === 'S') {
        computerBoard[row][col] = 'X';
        console.log(`Ви вистрілили в (${row}, ${col}) і влучили!`);
      } else if (computerBoard[row][col] === '~') {
        computerBoard[row][col] = 'O';
        console.log(`Ви вистрілили в (${row}, ${col}) і промахнулися.`);
      }
      
      if (allShipsDestroyed(computerBoard)) {
        console.log("Вітаємо! Ви перемогли!");
        gameOver = true;
      }
    } else {
      // Хід комп'ютера
      playerBoard = computerMove(playerBoard);
      
      if (allShipsDestroyed(playerBoard)) {
        console.log("Комп'ютер переміг. Спробуйте ще раз!");
        gameOver = true;
      }
    }
    
    // Міняємо черговість ходу
    playerTurn = !playerTurn;
    
    // Для демонстрації: обмежуємо кількість ходів
    if (Math.random() > 0.7) {
      gameOver = true;
      console.log("Гра завершена для демонстрації.");
    }
  }
  
  console.log("\nФінальний стан дошок:");
  console.log("Ваша дошка:");
  printBoard(playerBoard, false);
  console.log("Дошка комп'ютера:");
  printBoard(computerBoard, false);
}

// Запуск гри
playGame();