// boolean
let estaPago: boolean = true;

// number - valor numerico
let idade: number = 20;
let valor: number = 29.99;

// string
let empresa: string = 'Algaworks';

// template Strings
let nome: string = 'João';
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);

// arrays
let notas: number[] = [8, 6, 7, 9];

// tuple
let alunos: [string, number, string] = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);

// enum
enum Cor {Verde, Amarelo, Azul, Braco};

// any
let algumValor: any = 4;
algumValor = 'Agora é uma string';
algumValor = true;

// void
function alerta(): void {
    // ... alert('Operação não permitida');
}

//null e andefined -> Não faz muito sentido!
let u: undefined = undefined;
let n: null = null;

nome: undefined;
nome = null;


