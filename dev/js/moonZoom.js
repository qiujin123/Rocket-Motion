import { gsap } from "gsap";

gsap.set("#moon",{transformOrigin:"center"});

export let moonZoomTL = gsap.timeline();
moonZoomTL.fromTo("#moon",{alpha:0, scale:0.25},{alpha:1, duration:4, scale:7, y:"+=1250", x:"-=350",ease:"none"})