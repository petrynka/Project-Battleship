# 🚢 Battleship Game

A classic Battleship game built with **vanilla JavaScript**, using **modular architecture**, **Webpack**, and **Jest** for unit testing. The player competes against a computer by placing ships and taking turns attacking the opponent's board.

## 🔧 Technologies Used

- JavaScript (ES6+)
- Webpack
- HTML5
- CSS3
- Jest (for unit testing)

## 📁 Project Structure
battleship/ 
├── dist/ # Production build 
│   └── index.html 
│ 
├── src/ 
│   ├── game/ # Core game logic 
│   │ ├── ship.js 
│   │ ├── gameboard.js 
│   │ └── player.js 
│   ├── ui/ # DOM manipulation & UI 
│   │ ├── dom.js 
│   │ └── events.js 
│   ├── style.css 
│   └── index.js # Entry point 
│   ├── tests/ # Unit tests (Jest) 
│   ├── ship.test.js 
│   └── gameboard.test.js 
│ 
├── .gitignore 
├── package.json 
├── README.md 
└── webpack.config.js

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/petrynka/Project-Battleship.git
cd Project-Battleship

2. Install dependencies
    npm install

3. Run in development mode
    npm start

4. Build for production
    npm run build

5. Run tests
    npm test

🎯 Features
10x10 gameboard creation

Horizontal and vertical ship placement

Ship collision and boundary checking

Attack handling: hits and misses

Dynamic game state tracking

Jest unit tests for game logic

[Planned] Basic UI for user interaction

[Planned] Computer AI for automated moves

🧪 Testing
Unit tests are written using Jest to ensure the core logic (e.g., ship placement, attack mechanics) works as expected. Test files are located in the __tests__/ folder.


📌 In Progress
Visual game interface

Game loop and turn switching

