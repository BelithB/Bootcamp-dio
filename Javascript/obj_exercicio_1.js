/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
    Crie um metodo que dado a quantodade de quilometros e o preço do combustível, nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    constructor (marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoDoPercurso(distancia, precoCombustivel){ 
        return distancia * this.gastoMedio * precoCombustivel
    }
}

const uno = new Carro('fiat', 'branco', 1 / 13);
console.log(uno.calcularGastoDoPercurso(70, 5));
const palio = new Carro('fiat', 'preto', 1 / 10)
console.log( palio.calcularGastoDoPercurso (70, 5))