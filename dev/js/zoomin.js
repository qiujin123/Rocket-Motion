import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set(".midHill",{transformOrigin:"center"});
gsap.set(".frontHill",{transformOrigin:"center"});


zoomTL.from(".midHill",{duration:5.5, scale:10,ease: "power4.out",y:"+=800"},"zoom")
        .from(".frontHill",{duration:5.5, scale:10,ease: "power4.out",y:"+=800"},"zoom")