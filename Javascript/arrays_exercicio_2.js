//crie um programa que seja capaz de percorrer uma lista de números e imprima casa número par encontrado.

const numeros = [1, 2, 34, 45, 5, 16, 7, 98, 19, 10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    
    if (numero % 2 === 0) {
       console.log(numero);
    }
}