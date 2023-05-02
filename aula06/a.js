/* Laços de repetiçâo - FOR: repete até ser falso */
/* let só funciona dentro do for */

/* Números de 1 a 10 */
/* for (let i = 1;  i <= 10; i=i+1){
    document.write(`${i}<br>`)
} */

/* Números de 10 a 1 */
/* var num = prompt("Digite um número:")
for (let i = 10;  i >= 1; i=i-1){
    document.write(`${i}<br>`)
} */

/* Exemplo 2 - Imprimir somente os pares entre 0 e 10 */

/* document.write("Os valores pares são: <br>")
for (let i = 0; i <= 10; i = i + 1) {
   /*  if (i % 2 == 0) {
        document.write(`${i}<br>`)
    } */

    /* i % 2 == 0 ? document.write(i) : '' */ /* faz a mesma coisa, mas nem tão legível */

    /* Faça a tabuada da soma */
    
    var num = 2
    document.write(`Tabuada de adição do ${num}: <br>`)
    for (let i = 1; i <= 10; i=i+1){
        document.write(`${num} + ${i} = ${i+num} <br>`)
    }