/* Array */
/* var arr1 = new Array()
var arr2 = [1, 2, 3, 4, "betoneira", "cromada"]
/* Sempre começa em 0 o primeiro elemento */
/* alert(arr2[4]) */
/* document.write(arr2[0])
document.write(arr2[1])
document.write(arr2[2])
document.write(arr2[3])
document.write(arr2[4])
document.write(arr2[5]) */

/* let numeros = [3, 2, 0, 2, 4]
let nomes = ["Eduardo", "Carlos", "Patricia", "Alex"] */
/* numeros.push(6) */ /* adiciona por ultimo */
/* numeros.pop() */ /* retira elemento */
/* numeros.sort() */ /* organiza em ordem crescente */
/* numeros.unshift(7) */ /* adiciona primeiro */
/* document.write(numeros)
document.write(nomes.sort()) */
/* var frutas = []
frutas.push(prompt("Diga frutas"))
alert(frutas)  */

/* Atv: Preencha um array a partir dos dados informados pelo usuário, enquanto
a qantidade de posições do array for menor que 5 */


/* var dados = []
var cont = 1
while(cont <= 5){
    dados.push(prompt("Dados"))
    cont++
}
document.write(dados)
 */

/*Crie um array de letras minusculas e transforme em maiusculas */

/* var dados = [a, b, c, d, e]
for (let i=0; i<dados.length; i++){
    dados.push(dados[i].toUpperCase())
}
return dados
document.write(dados) */

/* var min = ["arroz", "blusa", "lápis"];
var mai = min.map(p => p.toUpperCase());

document.write(mai); */

var letras = ['a', 'b', 'c', 'd']
var maiusculas = letras.map(letra => letra.toUpperCase())
document.write(maiusculas)