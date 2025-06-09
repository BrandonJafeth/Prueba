import { gsap } from "https://cdn.skypack.dev/gsap";

console.log("GSAP is ready to use!");



let tl = gsap.timeline();


tl.to("#Yellow", {
    duration: 1,
    repeat: -1, 
    x: 100,
    rotation: 360,
    yoyo: true,
})
tl.to("#Red", {
    duration: 1,
    repeat: -1,
    x: 100,
    rotation: 360,
    yoyo: true,
}) 

