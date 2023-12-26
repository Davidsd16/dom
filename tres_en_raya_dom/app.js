// Seleccionar elementos del DOM para interactuar con el juego
const gameBoard = document.querySelector('.game_board');
const messageTurn = document.querySelector('.game_turn');
const endGame =document.querySelector('.endgame');
const endGameResult = document.querySelector('.endgame_result');
//const buttonResert = document.querySelector('.endgame_button');


// Variables de control del estado del juego
let isTurnX = true;
let turn = 0;
let maxTurn = 9;
let player = {
    x:'cross',
    o:'circle'
}

createBoard();

const winningPosition = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6],
    [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]




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

    
    if (checkWinner(currentTurn)) {
        return;
    }

    changeTurn();
    checkWinner(currentTurn);

    
}

// Dibujar el símbolo del jugador
function drawShape(element, newClass) {
    element.classList.add(newClass);
}

function changeTurn() {
    isTurnX = !isTurnX;
    messageTurn.textContent = isTurnX ? 'X' : 'O';
}

// Función para verificar si hay un ganador
function checkWinner(currentPlayer) {
    const cells = document.querySelectorAll('.cell');

    // Verificar que 'winningPosition' esté definido y sea un array
    if (!winningPosition || !Array.isArray(winningPosition)) {
        console.error('winningPosition no está definido correctamente.');
        return;
    }

    // Verificar combinaciones ganadoras
    const winner = winningPosition.some(array => {
        console.log(array);

        // Verificar si todas las posiciones en 'array' son válidas y pertenecen al jugador actual
        return array.every(position => {
            const cell = cells[position];
            return cell && cell.classList.contains(currentPlayer);
        });
    });

    if (winner) {
        showEndGame(true);
        return true;
    }

    return false;
}

// Función para mostrar el final del juego y el resultado
    function showEndGame(winner){
        endGame.classList.add('show')

        // Actualiza el contenido del resultado final
        if (winner) {
            endGameResult.textContent = `${isTurnX ? 'x' : 'o' }
            Ha ganado el juego!`;
        }
    }

