/* funções */
/* function ola() {
    document.write("Hello World!!!!!!!!!")
}
ola() *///chamar função

/* var num1 = Number(prompt("digite o primeiro numero:"))
var num2 = Number(prompt("digite o segundo número:"))

function somar() {
    return document.write(`${num1} + ${num2} = ${num1+num2}` )
}

function divisao() {
    return document.write("<br>", num1 / num2)
}

function multi() {
    return document.write ("<br>", num1 * num2)
}
function sub() {
    return document.write ("<br>", num1 - num2)
}
somar()
divisao()
multi()
sub() */

/* function expressions */

/* var ola = function(){
    return alert("Olá")
}
ola() */

/* Arrow function => */
/* let numeroaleatorio = function () {
    return Math.random
} */

let numeroaleatorio = () =>{
    return Math.random()
}
document.write(numeroaleatorio())