import { gsap } from "gsap";

export let faceChangeTL = gsap.timeline();

gsap.set("#dogPerson",{transformOrigin:"center bottom"});
gsap.set("#leftHand",{transformOrigin:"bottom"});

faceChangeTL.to("#Space",{ duration:3, scale:2.8})
            .to("#leftHand",{ duration:1, rotate:40},"maskOn")
            .to("#dogPerson",{ duration:1, rotate:5, x:464.5, y:64},"maskOn")
            .to("#leftHand",{ duration:1, rotate:0})