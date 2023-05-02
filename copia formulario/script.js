function retornarvalores(conteudo) {
    if (!("Erro" in conteudo)) {
        document.getElementById('inputendereco').value = (conteudo.logradouro)
        document.getElementById('inputcomplemento').value = (conteudo.complemento)
        document.getElementById('inputbairro').value = (conteudo.bairro)
        document.getElementById('inputCity').value = (conteudo.localidade)
    } else {
        alert("CEP não encontrado")
    }
}

function buscacep(valor) {
    var cep = valor.replace(/\D/g, '')
    if (cep != "") {
        var validarcep = /^[0-9]{8}$/
        if (validarcep.test(cep)) {
            document.getElementById('inputendereco').value = ". . ."
            var script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornarvalores`
            document.body.appendChild(script)
        } else {
            alert("Formato inválido")
        }
    }
}


