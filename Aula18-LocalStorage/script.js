window.addEventListener("load", function () {
    let chave = document.getElementById("key")
    let valor = document.getElementById("value")
    let salvar = document.getElementById("btnAdd")
    let limpar = document.getElementById("btnLimp")
    let conteudo = document.getElementById("conteudo")
    let deletar = document.getElementById("deletar")

    salvar.addEventListener("click", function () {
        let input1 = chave.value
        let input2 = valor.value
        localStorage.setItem(input1, input2)

        exibir()
    })

    limpar.addEventListener("click", function () {
        localStorage.clear()
        exibir()
    })

    function exibir() {
        let str = ""
        for (let i = 0, len = localStorage.length; i < len; i++) {
            let key = localStorage.key(i)
            let value = localStorage.getItem(key)
            str += `${[i + 1]}.${key} : ${value} <br>`
        }
        valor.chave = ""
        chave.value = ""
        conteudo.innerHTML = str
    }

    exibir()

    deletar.addEventListener("click", function () {
        localStorage.getItem(key)
        localStorage.clear(key)
        exibir()
    })
})