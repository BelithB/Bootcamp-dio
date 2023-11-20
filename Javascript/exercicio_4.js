function escrevaMeuNome(nome){
     return 'Meu nome é ' + nome;
}


function verificaIdade(idade){
    if (idade >= 18) {
        console.log (escrevaMeuNome('belit ') + 'é maior de idade');
    } else {
        console.log (escrevaMeuNome ('delit ') + 'menor de idade');
    }
}

verificaIdade(25);