import { gsap } from "gsap";

export let elevatorTL = gsap.timeline();

gsap.set("#Space",{transformOrigin:"center bottom"});

elevatorTL.to("#Space",{ duration:3, scale:2.5})
            .to("#elevator",{ duration:1, x:433})