// var, let e const

// var

function iniciarTime(inciaJogo: boolean) {
    var nome = 'Messi e amigos';

    if(inciaJogo){
        var cidade = 'em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);
    
}

//let ela só vale para declarar a variavel dentro do escopo que está sendo usada

function iniciarTime1(inciaJogo: boolean) {
    let nome = 'Messi e amigos';
    let cidade = 'em São Paulo';

    if(inciaJogo){
        cidade = 'em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);
    
}

iniciarTime(true);

// const - é uma constante quando você não quer trocar o valor de uma variável nunca - segue a ideia do let

function iniciarTime2(inciaJogo: boolean) {
    const nome = 'Messi e amigos';
    let cidade;

    if(inciaJogo){
        cidade = 'em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);
    
}

iniciarTime(true);

