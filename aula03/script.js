/* Cálculo do IMC - (índice de massa corpórea) 
 IMC = peso/altura*altura
*/

var peso = 52
var altura = 1.52
/* var imc = (altura*altura)/peso */
var IMC = peso / (altura ** 2) /* simplificado */
var IMC2 = peso / Math.pow(altura, 2)
document.write("IMC: ", IMC, "<br>")
document.write("IMC2: ", IMC2, "<br>")
document.write("IMC2 com menos casas decimais: ", IMC2.toFixed(2), "<br>") /* Corta as casas decimais */
document.write("IMC com menos casas decimais: ", IMC.toPrecision(2), "<br>") /* Arredonda */

/* Operador ternário ?: 
condição ? verdadeiro e : falso
Como um if e else
*/
var idade = 18
var maioridade = idade >= 18 ? "maior de idade" : "menor de idade,"
document.write(maioridade, "<br>")

/* Descobrir se o número é par ou ímpar */

var num1 = 6
div = num1 % 2
var parimpa = div == 0 ? "Número par" : "Número ímpar"
document.write(parimpa, "<br>")

var num2 = 7
var parimpa2 = num2 % 2 == 0 ? "par" : "ímpar"
document.write(`Resultado ${num2} é ${parimpa2}`) /* forma mais simples de dar print */
//template literal

