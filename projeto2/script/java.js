const mariogif = document.querySelector ('.mariogif');
const novo2 = document.querySelector ('.novo2');

const jump = () => {
    mariogif.classList.add ('jump');

    setTimeout(() => {
        
        mariogif.classList.remove('jump');



    }, 500);

}
const loop = setInterval(() => {

     const novo2Position = novo2.offsetLeft ;
     const mariogifPosition = window.getComputedStyle(mariogif).bottom.replace('px' , '');
        
     
     if (novo2Position <=  100 && novo2Position > 0 && mariogifPosition < 90 ) {

    novo2.style.animation = 'none';
    novo2.style.left = `${novo2Position}px`;

    mariogif.style.animation = 'none';
    mariogif.style.bottom = `${mariogifPosition}px`;


    mariogif.src = 'img/game-over.png'
    mariogif.style.width = '45px'
    mariogif.style.marginLeft = '80px'

    clearInterval (loop);

     }

} , 10);




document.addEventListener('keydown' , jump);