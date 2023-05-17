const button = document.getElementById('button');

const result = document.getElementById('result');

const form = document.getElementById('form');

const fio = document.getElementById('fio');

function resultFio() {

const fio2 = fio.value;

const fioNoSpace = fio2.replace(/\s+/g, '');

const stringFio = fioNoSpace[0].toUpperCase() + fioNoSpace.slice(1).toLowerCase();

return stringFio;

};

const ava = document.getElementById('ava');

const comment = document.getElementById('comment');

button.onclick = function displayComment() {

    result.innerHTML = resultFio() + "\n" + ava.value + "\n" + comment.value;

};