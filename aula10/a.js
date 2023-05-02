/* objeto */
/* let usuario = {
    nome: "Zé", 
    nascimento: 1973,
    profissao: "Encanador",
    comidasfavs: {
        elegosta: "Rolao",
        elenaogosta: "Buceta",
    } */
//chave:valor

/* document.write(usuario.nome)
document.write(usuario.comidasfavs.elenaogosta)
 */
/* JSON - Javascript Object Notation */
/* let usuarioconvertido = JSON.stringify(usuario)
document.write(usuarioconvertido)
 */
/* let data = new Date ()
document.write(data.getDate(), "<br>")
document.write(data.getDay(), "<br>")
document.write(data.getTime(), "<br>")
document.write(data.getFullYear(), "<br>")
document.write(data.getHours(), "<br>")
document.write(data.getMonth(), "<br>")
document.write(data,"<br>") */

let data1 = new Date("12/12/2012")
let data2 = new Date()
let diftempo = data2.getTime() - data1.getTime()
document.write(diftempo/(1000*3600*24))

