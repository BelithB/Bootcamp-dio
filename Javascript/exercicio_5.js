/* Codigo Condição de pagamento:
1- À vista Debito, recebe 10% de desconto;
2- À vista no dinheiro ou pix, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta, sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%



if (formaDePagamento === 1){
    console.log (valorDaEtiqueta - (valorDaEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log (valorDaEtiqueta - (valorDaEtiqueta  * 0.15));
} else if ( formaDePagamento === 3) {
    console.log (valorDaEtiqueta);
} else {
    console.log(valorDaEtiqueta + (valorDaEtiqueta * 0.1));   
} */


const valorDaEtiqueta = 100;
const formaDePagamento = 4;

function aplicarDesconto(valor, desconto){
    return (valor - (valor * desconto / 100));
}

function aplicaJuros(valor, juros){ 
    return (valor + (valor * juros / 100));
}


if (formaDePagamento === 1){
    console.log (aplicarDesconto (valorDaEtiqueta, 10));
} else if (formaDePagamento === 2){
    console.log (aplicarDesconto (valorDaEtiqueta, 15));
} else if ( formaDePagamento === 3) {
    console.log (valorDaEtiqueta);
} else {
    console.log(aplicaJuros (valorDaEtiqueta, 10));   
}
