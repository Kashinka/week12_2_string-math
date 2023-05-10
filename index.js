const button = document.getElementById('button');

const result = document.getElementById('result');

const form = document.getElementById('form');

const fio = document.getElementById('fio');

button.onsubmit = function() {

    result.innerHTML = fio.value;

};