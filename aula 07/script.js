/* Laço de repetição while e do while */

/* while(condicao){

} */

/* Números de 1 a 10 usando while */

/* var cont = 1
while(cont <=10){
    document.write(`${cont} <br>`)1
    cont++
} */

/* imprima os nûmeros na ordem inversa */

/* var cont = 10
while (cont >= 1) {
    document.write(`${cont} <br>`)
    cont--
}
 */

/* Peça para o usuário digitar um número e enquanto 
esse número for positivo ele faz a soma dos números digitados; e, quando um número negativo
for digitado, ele pare  */

/* var soma = 0
var num = Number(prompt("Informe um número:"))
while (num >= 0) {
    soma = soma + num
    var num = Number(prompt("Informe um número:"))
}
document.write(`A soma dos números: ${soma}`) */

var dados = []
while(dados.lenght <= 5){
    dados.push(prompt("Dados"))
}
document.write(dados)