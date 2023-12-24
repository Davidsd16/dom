// Algoritmo para aumentar el contador
const btAumentar = document.querySelector('.btn-info');
const btDisminuir = document.querySelector('.btn-danger');

const span = document.getElementById('span');
let contador = 0;

btAumentar.addEventListener('click', () => {
    contador++;
    span.textContent = contador;

})

btDisminuir.addEventListener('click', () => {
    contador--;
    span.textContent = contador;

})
