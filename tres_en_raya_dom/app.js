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


createBoard();

// Función para crear el tablero de juego
function createBoard() {
    const cells = 9;

    while (gameBoard.firstElementChild) {
        gameBoard.firstElementChild.remove();
    }

    // Bucle para crear las celdas del tablero
    for (let i = 0; i < cells; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');

        div.addEventListener('click', handleGame, { once:true })

        gameBoard.append(div);
    }
}

// Interacciones del juego cuando se hace clic
function handleGame(e) {
    const currentCell = e.currentTarget;
    const currentTurn = isTurnX ? player.x : player.o;
    
    turn++;
    drawShape(currentCell, currentTurn);

    changeTurn();
}

// Dibujar el símbolo del jugador
function drawShape(elements, newClass) {
    elements.classList.add(newClass);
}

function changeTurn() {
    isTurnX = !isTurnX;
    messageTurn.textContent = isTurnX ? 'X' : 'O';
}