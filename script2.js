// JavaScript for Tic-Tac-Toe game
const cells = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('game-status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            isGameActive = false;
            gameStatus.textContent = `Player ${currentPlayer} wins!`;
            return;
        }
    }

    if (!board.includes('')) {
        isGameActive = false;
        gameStatus.textContent = "It's a draw!";
        return;
    }
};

const handleClick = (event) => {
    const clickedCell = event.target;
    const cellIndex = Array.from(cells).indexOf(clickedCell);

    if (board[cellIndex] !== '' || !isGameActive) return;

    board[cellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (isGameActive) {
        gameStatus.textContent = `Player ${currentPlayer}'s turn`;
    }
};

const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    gameStatus.textContent = `Player X's turn`;

    cells.forEach(cell => {
        cell.textContent = '';
    });
};

// Add event listeners
cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
