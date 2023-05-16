const button = document.getElementById('button');

const result = document.getElementById('result');

const form = document.getElementById('form');

const fio = document.getElementById('fio');

let fio3 = function correctName() {

    let fio2 = fio.value;

    return fio2[0].toUpperCase().replace(/\s+/g, '') + fio2.slice(1).toLowerCase().replace(/\s+/g, '');

};

const ava = document.getElementById('ava');

const comment = document.getElementById('comment');

button.onclick = function displayComment() {

    result.innerHTML = fio3() + "\n" + ava.value + "\n" + comment.value;

};