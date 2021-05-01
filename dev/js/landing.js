import { gsap } from "gsap";
import {flamesTL} from "./rocketGo"


export let landingTL = gsap.timeline();
landingTL.to("#rocket",{duration:4, y:"+=220"},"landed")
            .to("#smallFlameLeft",{duration:4, scaleY:0, onStart:stopFlames},"landed")
            .to("#smallFlameRight",{duration:4, scaleY:0},"landed")
            .to("#largeFlameLeft",{duration:4, scaleY:0},"landed")
            .to("#largeFlameRight",{duration:4, scaleY:0},"landed")
            .to("#Space",{duration:4, scale: 1.5},"landed")


function stopFlames(){
    flamesTL.kill();
}