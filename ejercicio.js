const instructions = document.getElementById('instructions');
const imagen = document.getElementById('imagen');
const sonido = document.querySelector('.sonido');
const control = document.querySelector('.control');

document.addEventListener ('keypress', (e) => {  // En el documento se crea un evento para que las condiciones funcionen a partir de que se oprima una tecla 
    switch (e.keyCode) { // Condiciones a partir de los números del teclado
        case 115:
            sonido.innerHTML = `<audio src ='sounds/hit-hat.mp3' autoplay></audio>`; // Se incorpora sonido para las diferentes partes de la bateria
            imagen.src="img/base-hit-hat.png"; // Se agrega un imagen para resaltar la parte de la bateria que está sonando
            break;
        case 100:
            sonido.innerHTML = `<audio src ='sounds/platillo-crash-izquierdo.mp3' autoplay></audio>`;
            imagen.src="img/base-platillo-izquierdo.png";
            break;
        case 102:
            sonido.innerHTML = `<audio src ='sounds/caja.mp3' autoplay></audio>`;
            imagen.src="img/base-caja.png";
            break;
        case 103:
            sonido.innerHTML = `<audio src ='sounds/tom-aereo.mp3' autoplay></audio>`;
            imagen.src="img/base-tom-aereo.png";
            break;
        case 32:
            sonido.innerHTML = `<audio src ='sounds/bombo.mp3' autoplay></audio>`;
            imagen.src="img/base-bombo.png";
            break;
        case 106:
            sonido.innerHTML = `<audio src ='sounds/platillo-ride.mp3' autoplay></audio>`;
            imagen.src="img/base-platillo-ride.png";
            break;
        case 107:
            sonido.innerHTML = `<audio src ='sounds/tom-suelo.mp3' autoplay></audio>`;
            imagen.src="img/base-tom-suelo.png";
            break;
        case 108:
            sonido.innerHTML = `<audio src ='sounds/platillo-crash-derecho2.mp3' autoplay></audio>`;
            imagen.src="img/base-platillo-crash-derecho.png";
            break;

        default:
            break;
    }
    
})

document.addEventListener('DOMContentLoaded',() =>{ // Se crea un evento al documento cada vez que este se recargue y esté listo
    control.style.display="none"
})

instructions.addEventListener('click',() =>{ // Las instrucciones de la batería aparecerán cuando se dé click en la opción de "instrucciones"
    control.style.display="flex";

    setTimeout(() =>{ // Las instrucciones aparecerán en pantalla por un tiempo estimado de 6 segundos
        control.style.display="none"; 
    }, 6000) 
})


