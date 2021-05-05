import { gsap } from "gsap";

gsap.set(".flowLeaf",{transformOrigin:"center bottom"});

export let fadeInTL = gsap.timeline();
fadeInTL.from("#backSky",{alpha:0, duration:2, scale:20, onComplete:controlLeaf})
        .from("#clouds g",{alpha:0, stagger:0.25, duration:0.5})



export let leafTL = gsap.timeline({paused:true});

leafTL.to(".flowLeaf",{duration:3, rotate:-6 ,yoyo:true, repeat:-1},"leaf")
        
        
 function controlLeaf(){
 leafTL.play()
}
     