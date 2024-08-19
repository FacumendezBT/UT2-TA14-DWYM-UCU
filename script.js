window.onload = () => {
    const btn = document.getElementById('btn');
    const inputElemento = document.getElementById('inputElemento');
    const lista = document.getElementById('lista');
    btn.addEventListener('click', () => {
        const texto = inputElemento.value;
        agregarElemento(texto, lista);
        inputElemento.value = '';
    });
}

/**
 * Función que agrega un elemento a una lista en el DOM
 * @param {*} texto - texto a agregar
 * @param {*} lista - lista a la que se le agregará el elemento
 */
function agregarElemento(texto, lista) {
    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);
}
