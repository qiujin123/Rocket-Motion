import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();
fadeInTL.from("#backSky",{alpha:0, duration:3, scale:20})
        .from("#clouds",{alpha:0, stagger:0.5, duration:0.5},"-=2");