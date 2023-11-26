/* 
2 - Crie uma classe para representar pessoas.
PAra cada pessoa, teremos os atributos, nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (imc = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça ao josé para dizer o valor do seu IMC.
*/

class Pessoa {
    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    valorImc(){
        return this.peso / (this.altura * this.altura);
    }

    informaImc(){
        const imc = this.valorImc()
        if (imc < 18.5) {
            return ('está abaixo do peso');
        } else if ( imc >= 18.5 && imc < 25){
            return ('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return  ('Obeso');
        } else {
            return  ('Obesidade Grave');
        }

    }
    
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.informaImc());
