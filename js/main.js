'use strict'

let prodotti = ['pane', 'tonno', 'pasta', 'olio', 'nutella'];

let ul = document.getElementById('lista');
let i = (0);

while (i < prodotti.length) {
    const element = document.createElement('li')
    element.innerHTML = prodotti[i];
    ul.append(element)
    i++
}