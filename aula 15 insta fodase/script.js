const unsplashURL = 'https://source.unsplash.com/random/'
const container = document.querySelector('.container')
const linhas = prompt("quantas img?")

for (let i = 1; i < linhas * 2.5; i++){
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getrandomtamanho()}`
    container.appendChild(img)
}

function getrandomtamanho(){
    return `${GetRandomNum()}x${GetRandomNum()}`
}

function GetRandomNum(){
    return Math.floor(Math.random()*10) +1000
    
}

