function ativaLetra(elemento) {
    const texto = elemento.innerHTML;
    if (texto.trim() === "") return;
    
    const arrTexto = texto.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }
  
  const titulo = document.querySelector('.digitando');
  ativaLetra(titulo);


  /* errei e nao sabia aonde estava errando, kkk mas fiz outro mode deu certo.
  function ativaLetra(elemento){
  const arrTexto = elemento.innerHTML.split('');
  elemento.innerHTML ='';
  arrTexto.forEach((letra, i)=>{
    setTimeout (()=>{
      elemento.innerHTML += letra;
    }, 75 * i)
  })
}

document.addEventListener("DOMContentLoaded", function() {
  const titulo = document.querySelector('.digitando');
  ativaLetra(titulo);
});
*/


