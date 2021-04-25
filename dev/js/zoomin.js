import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set(".midHill",{transformOrigin:"center"});
gsap.set(".frontHill",{transformOrigin:"center"});
gsap.set("#midSurface",{transformOrigin:"center"});
gsap.set("#midHillMid",{transformOrigin:"center"});
gsap.set("#backHillRight",{transformOrigin:"center"});
gsap.set("#backHillLeft",{transformOrigin:"center"});
gsap.set("#backMountain",{transformOrigin:"center"});

zoomTL.from(".midHill",{duration:5.5, scale:10,ease: "power4.out",y:"+=1000"},"zoom")
        .from(".frontHill",{duration:5.5, scale:10,ease: "power4.out",y:"+=800"},"zoom")
        .from("#midSurface",{duration:5.5, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
        .from("#midHillMid",{duration:5.5, scale:10,ease: "power4.out",y:"+=800"},"zoom")
        .from("#backHillRight",{duration:5.5, scale:10,ease: "power4.out",y:"+=1800"},"zoom")
        .from("#backHillLeft",{duration:5.5, scale:10,ease: "power4.out",y:"+=1800"},"zoom")
        .from("#backMountain",{duration:5.5, scale:10,ease: "power4.out",y:"+=1800"},"zoom")