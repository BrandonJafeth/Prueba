import { gsap } from "https://cdn.skypack.dev/gsap";
import { SplitText } from "https://cdn.skypack.dev/gsap/SplitText";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger) 

const canvas = document.getElementById("hero");

const ctx = canvas.getContext("2d");

canvas.width = 1068;
canvas.height = 600;

const TOTAL_FRAMES = 65


const createURL = (frame) => {
const id = frame.toString().padStart(4, "0");

return `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/medium/${id}.png`

}

const images = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const img = new Image();
  img.src = createURL(i);
  return img;
});


const airpods = {
frame : 0
}


gsap.to(airpods, {
frame: TOTAL_FRAMES - 1,
ease: "none",
snap: "frame",
scrollTrigger: {
  scrub: 0.5, // vincula el progreso de la animación al desplazamiento de la página
},
onUpdate: render, // se llama a la función render cada vez que se actualiza el valor de airpods.frame
});


images[0].onload = () => render();

function render() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[airpods.frame], 0, 0, canvas.width, canvas.height);
}

gsap.to(".text-primary", {
  scale: 1.5,
  autoAlpha: 0,

  scrollTrigger: {
      start: "center center", // cuando el centro del elemento entra en el centro de la pantalla
    scrub: 0.5 // vincula el progreso de la animación al desplazamiento de la página
  }
});











































// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText)


// const splitText = new SplitText(".text", {
//     type: "words"
// });


// gsap.from(splitText.words, {
//     duration: 1,
//     y: 10, // estado inicial 
//     stagger : 0.1, // segundos entre cada palabra
//     autoAlpha: 0,
//     filter: "blur(10px)",
// });


// let tl = gsap.timeline();


// tl.to("#Yellow", {
//     duration: 3,
//     x: 900,
//     y : -100,
 
// })
// tl.to("#Red", {
//     duration: 3,
//   x: 500,
// }) 

// tl.to("#Blue", {
//     duration: 3,
//     x: 900,
  
// }, "<");

