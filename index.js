const button = document.getElementById('button');

const result = document.getElementById('result');

const form = document.getElementById('form');

const fio = document.getElementById('fio');

const fio2 = fio.value;

const fio2_1 = function reg1() {

    return fio2[0].toUpperCase();

};

const fio2_2 = function reg2() {
    
    return fio2.slice(1).toLowerCase();

}

const fio3_1 = fio2_1().replace(/\s+/g, '');

const fio3_2 = fio2_2().replace(/\s+/g, '');

let fio3 = function correctName() {

    return fio3_1 + fio3_2;

};

const ava = document.getElementById('ava');

const comment = document.getElementById('comment');

button.onclick = function displayComment() {

    result.innerHTML = fio3() + "\n" + ava.value + "\n" + comment.value;

};