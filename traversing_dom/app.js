// Saber los hijos que tiene un nodo Padre
const wrapper = document.body.childNodes[1];
console.log(wrapper.childNodes);

// Saber los elementos que tiene un nodo Padre
const elements = document.body.children;
console.log(elements);

// Retornar el primer nodo del Padre
const firstNode = document.body.firstChild;
console.log(firstNode);

// Retornar el primer nodo del Padre que sea Html
const firstNodeHtml = document.body.firstElementChild;
console.log(firstNodeHtml);

// Retornar el ultimo nodo del Padre
const lastNode = document.body.lastChild;
console.log(lastNode);

// Retornar el ultimo nodo del Padre que sea un elemento
const lastElement = document.body.lastElementChild;
console.log(lastElement);

// Retorna verdadero si el nodo tiene hijos
const trueChildren = document.body.children[0]
console.log(trueChildren.hasChildNodes());

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Acceder al hijo en la posicion uno//
const div = wrapper.children[1];
console.log(div);

// Modificar el texto de un nodo
const h1 = wrapper.children[0];
h1.textContent = "Texto modificado desde el DOM"

// Escuchar eventos en DOM y cambiar estilos
var anchor = document.querySelectorAll('.anchor');

// Accede al primer elemento de la NodeList (índice 0)
var primerHijo = anchor[0].children[0];

// Imprime el primer hijo en la consola
console.log(primerHijo);

// Agrega un evento click al primer hijo
primerHijo.addEventListener('click', function(){
    document.documentElement.style.backgroundColor = "black";
    document.documentElement.style.color = "white";
});

// Como accder y subir entre los nodo padres, ascendente!.
console.log(primerHijo.parentNode.parentNode.parentNode);

//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// OBTENER ELEMENTOS DEL DOM CON CARACTERISTICAS ESPECIALES
 /// conseguir elementos por ID
const wrapper_1 = document.getElementById('wrapper');
console.log(wrapper_1);

// Conseguir elementos por clase
const link_1 = document.getElementsByClassName("link bold");
console.log(link_1); 

// Buscar todo los elemntos relacionados con el mismo nombre
const divs = document.getElementsByTagName('div');
console.log(divs);

// Retornar una lista de nodos que contengan su atributo name, solo se puede utilizar en el nodo raiz
const input = document.getElementsByName('telefono');
console.log(input);

// Retornar un elemnto por selector de css
const wrapper_2 = document.querySelector('#wrapper');
console.log(wrapper_2);

const linkBold = wrapper_2.querySelector('.title_2');
console.log(linkBold);

// retornar todos los elementos de un Nodo
const elemntsAll = document.querySelectorAll('.link');
console.log(elemntsAll);
