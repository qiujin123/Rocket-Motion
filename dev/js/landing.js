import { gsap } from "gsap";
import {flamesTL} from "./rocketGo"

gsap.set("#leftHand",{transformOrigin:"center bottom"});

export let landingTL = gsap.timeline();
landingTL.to("#rocket",{duration:4, y:"+=220"},"landed")
            .to("#smallFlameLeft",{duration:4, scaleY:0, onStart:stopFlames},"landed")
            .to("#smallFlameRight",{duration:4, scaleY:0},"landed")
            .to("#largeFlameLeft",{duration:4, scaleY:0},"landed")
            .to("#largeFlameRight",{duration:4, scaleY:0},"landed")
            .to("#Space",{duration:4, scale: 2},"landed")
            .to("#leftHand",{duration:.4, yoyo:true, rotate:45, repeat: 3})
            // .to("#Space",{delay:1, duration:3, scale:1}, "zoomOut")
            // .to("#moon",{delay:1, duration:3, scale:0.8, y:400}, "zoomOut")
            // .to("#rocket",{delay:1, duration:3, scale:0.2, y:-905}, "zoomOut")


function stopFlames(){
    flamesTL.kill();
}