function ola() {
    alert("Boo")
}

function carregarpagina() {
    alert("Página carregada!!!!!!!")
}

/* Manipulação do DOM -> Document Object Model */

function mudartexto() {
    var x = document.getElementById("nome")
    x.value = x.value.toUpperCase()
}

function somar() {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value

    var resultado = parseInt(num1) + parseInt(num2)
    document.querySelector(".resultado").innerHTML = resultado
}