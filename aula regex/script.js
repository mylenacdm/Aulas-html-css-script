/* let exp = new RegExp('ola') */

/* let re = /ola/i
let str = "Ola mundo, Regex"
let resultado = re.test(str)
console.log(resultado) */

/* let result = str.match(/amigos/ig) */
/* let result = str.replace(/a/gi, 'p') */

/* let str = "Me ferrei amigos e amigas. Estevão Ferreira, AMIGOS."
let saida = str.replace(/a|ã|e|i|o|u/gi, 'p')
console.log(saida) */

/* let str = "Eu gosto de comer chocolate, bolo, bolo de copo e pão com ovo"
let re = /bolo|pão/gi
let newstring = str.replace(re, (match) => {
    console.log({match})
    return match.toUpperCase()
})

console.log(newstring) */


/* Método search */
/* let re = /[A-Z]/
let str = "O rato roeu a roupa do Rei de Roma"
let index = str.search(re)
console.log(index) */

/* let re = /\d/g
numeros = telefone.match(re)
novonumero = numeros.join('')
console.log(novonumero) */
/* let muitotexto = 'Aolongodosúltimosanosocrescimentodemográficodopaístemdiminuídooritmoqueeramuitoaltoatéadécadade1960Em1940orecenseamentoindicava41236315habitantesem195051944397habitantesem196070070457habitantesem197093139037habitantesem1980119002706habitantesem1991146825475habitantesem2000169590693em2010190755799habitanteseem2022207750291habitantesEm50anosapopulaçãobrasileiradobrouemrelaçãoaos90milhõesdehabitantesdadécadade1970' */
/* console.log(muitotexto.match(/\w/gi).join('')) */
/* console.log(muitotexto.match(/[a-z]es/g)) */

/* quantificadores */
/* et numeros = /\d+/g
console.log(muitotexto.match(numeros)) */

/*  */

const cpf = document.getElementById("cpf")
cpf.addEventListener("keyup", formatarcpf)
function formatarcpf(e) {
    var v = e.target.value.replace(/\D/, "")/* \D reconhece oq n é numero */
    v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    e.target.value = v
}
