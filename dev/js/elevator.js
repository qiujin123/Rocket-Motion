import { gsap } from "gsap";

export let elevatorTL = gsap.timeline();

gsap.set("#Space",{transformOrigin:"center bottom"});

elevatorTL.to("#Space",{ duration:3, scale:2.5})
            .to("#elevator",{ duration:1, x:434})
            .to("#person",{ duration:1, x:450, y:60})
            .to("#elevator",{ duration:1, x:447.5})
            .to("#bodyParts2",{ duration:1, alpha:0})
            .to("#bodyParts1",{ duration:2, y:8})

            