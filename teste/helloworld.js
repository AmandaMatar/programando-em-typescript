/*
Java: String: nome
TypeScript: nome: string
*/

function dizerOla(nome) {
    console.log("Ol\u00E1 &{nome}");
}
dizerOla('Algaworks');

/* novidade do ecs6

function dizerOla(nome:string) {
    console.log(`Olá ${nome}`);
}
dizerOla('Algaworks');

*/ 
