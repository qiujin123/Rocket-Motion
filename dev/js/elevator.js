import { gsap } from "gsap";

export let elevatorTL = gsap.timeline();

gsap.set("#Space",{transformOrigin:"center bottom"});

elevatorTL.to("#elevator",{ duration:1, x:434})
            .to("#dogPerson",{ duration:1, x:449, y:62.7},"walk")
            .to("#person",{ duration:1, x:450, y:60},"walk")
            .to("#elevator",{ duration:1, x:447.5})
            .to("#bodyParts2",{ duration:1, alpha:0},"elevatorDown")
            .to("#bodyParts1",{ duration:2, y:8},"elevatorDown")
            .to("#dogPerson",{ duration:2, y:70},"elevatorDown")

            