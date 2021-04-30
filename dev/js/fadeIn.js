import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();
fadeInTL.from("#backSky",{alpha:0, duration:2, scale:20})
        .from("#clouds",{alpha:0, duration:1})

