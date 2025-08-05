# HandBrawl - Rock Paper Scissors Game

A modern, interactive Rock-Paper-Scissors game built with HTML, CSS (Tailwind), and JavaScript.

## Features

- 🎮 Interactive game with visual feedback
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design for all devices
- 🏆 Best of 3 rounds gameplay
- 🔄 Play Again functionality
- 🎯 Real-time score tracking
- ✨ Visual effects and animations

## How to Play

1. **Start the Game**: Run the development server (see Installation below)
2. **Make Your Choice**: Click on Rock, Paper, or Scissors
3. **See the Result**: The game will show who won each round
4. **Best of 3**: Play continues until someone wins 2 out of 3 rounds
5. **Play Again**: Click "Play Again" to start a new game

## Installation & Running

1. **Clone or download** the project files
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser** and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Game Rules

- **Rock** beats Scissors
- **Paper** beats Rock  
- **Scissors** beats Paper
- If both players choose the same, it's a draw
- First player to win 2 out of 3 rounds wins the game

## Technical Details

- **Frontend**: HTML5, CSS3 (Tailwind), JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS for responsive design
- **Assets**: PNG images for Rock, Paper, and Scissors

## File Structure

```
SPS-game/
├── index.html          # Entry point with redirect to home.html
├── src/
│   ├── pages/
│   │   └── home.html   # Main game interface
│   ├── assets/
│   │   ├── Rock.png    # Rock image
│   │   ├── paper.png   # Paper image
│   │   └── sc.png      # Scissors image
│   ├── gameLogic.js    # Game logic and interactions
│   ├── style.css       # Tailwind CSS imports
│   └── main.js         # Vite entry point (unused in current setup)
├── package.json        # Project dependencies
└── README.md          # This file
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development

To modify the game:
- Edit `src/pages/home.html` for UI changes
- Edit `src/gameLogic.js` for game logic changes
- Edit `src/style.css` for styling changes

The game automatically redirects from `index.html` to `src/pages/home.html` when accessed.

Enjoy playing HandBrawl! 🎮
