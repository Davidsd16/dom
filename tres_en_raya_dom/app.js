// Seleccionar elementos del DOM para interactuar con el juego
const gameBoard = document.querySelector('.game_board');
const messageTurn = document.querySelector('.game_turn');
const endGame =document.querySelector('.endgame');
const endGameResult = document.querySelector('.endgame_result');
const buttonResert = document.querySelector('.endgame_button');


// Variables de control del estado del juego
let isTurnX = true;
let turn = 0;
let maxTurn = 9;
let player = {
    x:'cross',
    o: 'circle'
}

messageTurn.textContent = isTurnX ? 'X' : 'O';
createBoard();

// Función para crear el tablero de juego
function createBoard() {
    const cells = 9;
    // Bucle para crear las celdas del tablero
    for (let i = 0; i < cells; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');

        gameBoard.append(div);
    }
}