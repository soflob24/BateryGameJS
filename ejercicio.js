const instructions = document.getElementById('instructions');
const imagen = document.getElementById('imagen');
const sonido = document.querySelector('.sonido');
const control = document.querySelector('.control');

document.addEventListener ('keypress', (e) => {
    switch (e.keyCode) {
        case 115:
            sonido.innerHTML = `<audio src ='sounds/hit-hat.mp3' autoplay></audio>`;
            imagen.src="img/base-hit-hat.png";
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

document.addEventListener('DOMContentLoaded',() =>{
    control.style.display="none"
})

instructions.addEventListener('click',() =>{
    control.style.display="flex";

    setTimeout(() =>{
        control.style.display="none";
    }, 6000) 
})


