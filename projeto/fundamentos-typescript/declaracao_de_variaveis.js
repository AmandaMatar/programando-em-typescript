// var, let e const
// var
function iniciarTime(inciaJogo) {
    var nome = 'Messi e amigos';
    if (inciaJogo) {
        var cidade = 'em Uberlândia';
    }
    console.log("".concat(nome, " v\u00E3o jogar ").concat(cidade));
}
//let ela só vale para declarar a variavel dentro do escopo que está sendo usada
function iniciarTime1(inciaJogo) {
    var nome = 'Messi e amigos';
    var cidade = 'em São Paulo';
    if (inciaJogo) {
        cidade = 'em Uberlândia';
    }
    console.log("".concat(nome, " v\u00E3o jogar ").concat(cidade));
}
iniciarTime(true);
// const - é uma constante quando você não quer trocar o valor de uma variável nunca - segue a ideia do let
function iniciarTime2(inciaJogo) {
    var nome = 'Messi e amigos';
    var cidade;
    if (inciaJogo) {
        cidade = 'em Uberlândia';
    }
    console.log("".concat(nome, " v\u00E3o jogar ").concat(cidade));
}
iniciarTime(true);
