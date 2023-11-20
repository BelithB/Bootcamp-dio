/* 
    3 - Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Codigo Condição de pagamento:
    1- À vista Debito, recebe 10% de desconto;
    2- À vista no dinheiro ou pix, recebe 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta, sem juros;
    4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/


const valorDaEtiqueta = 80;
const formaDePagamento = 3;

if (formaDePagamento === 1){
    console.log (valorDaEtiqueta - (valorDaEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log (valorDaEtiqueta - (valorDaEtiqueta  * 0.15));
} else if ( formaDePagamento === 3) {
    console.log (valorDaEtiqueta);
} else {
    console.log(valorDaEtiqueta + (valorDaEtiqueta * 0.1));   
}
