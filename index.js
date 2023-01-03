//Cores armazenadas
const cores = [
    "Blue",
    "Red", 
    "Green" ,
    "Gray",
    "Purple",
    "Orange",
    "Black",
    ];
//Event Listener
const botao = document.querySelector('.btn');
botao.addEventListener('click',function(){
    let randomColor = cores[Math.floor(Math.random()*cores.length)];
    let header = document.getElementById('mudaCor');
    header.style.backgroundColor = randomColor;
});

