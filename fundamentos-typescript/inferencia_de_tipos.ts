// é o typescript inferir o tipo mesmo que voce nao defina ele

let quantidade = 20;
// quantidade = 'qualquer'; - não compila!

var x = [1, 2, null];
// x[0] = true; -> Não compila!
// Contextual Typing

window.onmousedown = function (evento) {
    console.log(evento.button); // OK
    // console.log(evento.buton); Não compila!
};
