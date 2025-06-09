import { gsap } from "https://cdn.skypack.dev/gsap";
import { SplitText } from "https://cdn.skypack.dev/gsap/SplitText";


gsap.registerPlugin(SplitText)


const splitText = new SplitText(".text", {
    type: "words"
});


gsap.from(splitText.words, {
    duration: 1,
    y: 10, // estado inicial 
    stagger : 0.1, // segundos entre cada palabra
    autoAlpha: 0,
    filter: "blur(10px)",
});


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

