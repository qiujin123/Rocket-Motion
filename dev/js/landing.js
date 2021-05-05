import { gsap } from "gsap";
import {flamesTL} from "./rocketGo"

gsap.set("#leftHand",{transformOrigin:"center bottom"});

export let landingTL = gsap.timeline();
landingTL.to("#rocket",{duration:4, y:"+=350"},"landed")
            .to("#smallFlameLeft",{duration:4, scaleY:0, onStart:stopFlames},"landed")
            .to("#smallFlameRight",{duration:4, scaleY:0},"landed")
            .to("#largeFlameLeft",{duration:4, scaleY:0},"landed")
            .to("#largeFlameRight",{duration:4, scaleY:0},"landed")
            .to("#Space",{duration:4, scale: 3},"landed")
            .to("#leftHand",{duration:.4, yoyo:true, rotate:45, repeat: 3})
            


function stopFlames(){
    flamesTL.kill();
}