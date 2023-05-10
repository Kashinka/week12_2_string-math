const button = document.getElementById('button');

const result = document.getElementById('result');

const form = document.getElementById('form');

const fio = document.getElementById('fio');

const ava = document.getElementById('fio');

const comment = document.getElementById('comment');

button.onclick = function() {

    result.innerHTML = fio.value + "\n" + ava.value + "\n" + comment.value;

};