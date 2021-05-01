import { gsap } from "gsap";

export let rocketGoTL = gsap.timeline();

rocketGoTL.to("#rocketDoorLeft",{ duration:2, x:-30}, "doorOpen")
            .to("#rocketDoorRight",{ duration:2, x:62, onComplete:controlFlames}, "doorOpen")
            .to("#rocket",{ duration:2, y:-10}, "rocketOut")
            .to("#Space",{ duration:3, scale:1 }, "rocketOut")
            .to("#rocketDoorLeft",{ duration:2, x:0 }, "doorClose")
            .to("#rocketDoorRight",{ duration:2, x:33 }, "doorClose")
            .to("#rocket",{ duration:2, y:-500, ease: "power3.in"}, "rocketOut1")
            .to("#clouds",{duration:5, y:"+=700", ease: "power3.in"},'rocketOut1')
            .to("#front",{duration:5, y:"+=600", ease: "power3.in"},'rocketOut1')
            .to("#middle",{duration:5, y:"+=500", ease: "power3.in"},'rocketOut1')
            .to("#backSky",{duration:6, fill:"#021125", ease: "power3.in"},'rocketOut1');
            
            
            








export let flamesTL = gsap.timeline({paused:true});

flamesTL.to("#smallFlameLeft",{duration:0.25, scaleY:.75,yoyo:true, repeat:-1},"flames")
.to("#largeFlameLeft",{duration:0.15, scaleY:.45,yoyo:true, repeat:-1},"flames")
.to("#smallFlameRight",{duration:0.25, scaleY:.75,yoyo:true, repeat:-1},"flames")
.to("#largeFlameRight",{duration:0.15, scaleY:.45,yoyo:true, repeat:-1},"flames")

function controlFlames(){
    flamesTL.play()
}



