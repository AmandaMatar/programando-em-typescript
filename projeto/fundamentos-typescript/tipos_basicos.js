// boolean
var estaPago = true;
// number - valor numerico
var idade = 20;
var valor = 29.99;
// string
var empresa = 'Algaworks';
// template Strings
var nome = 'João';
console.log("Ol\u00E1, meu nome \u00E9 ".concat(nome, " e tenho ").concat(idade, " anos"));
// arrays
var notas = [8, 6, 7, 9];
// tuple
var alunos = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
// enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Braco"] = 3] = "Braco";
})(Cor || (Cor = {}));
;
// any
var algumValor = 4;
algumValor = 'Agora é uma string';
algumValor = true;
// void
function alerta() {
    // ... alert('Operação não permitida');
}
//null e andefined -> Não faz muito sentido!
var u = undefined;
var n = null;
nome: undefined;
nome = null;
