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