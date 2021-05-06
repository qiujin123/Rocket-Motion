import { gsap } from "gsap";

export let rocketGoTL = gsap.timeline();

rocketGoTL.to("#rocketDoorLeft",{ duration:2, x:-30}, "doorOpen")
            .to("#rocketDoorRight",{ duration:2, x:62, onComplete:controlFlames}, "doorOpen")
            .to("#Space",{ duration:5, scale:1 }, "rocketOut")
            .to("#rocket",{ duration:3, y:-500, ease: "power3.in"}, "rocketOut")
            .to("#clouds",{duration:6, y:"+=700", ease: "power3.in"},'rocketOut')
            .to("#front",{duration:6, y:"+=600", ease: "power3.in"},'rocketOut')
            .to("#middle",{duration:6, y:"+=500", ease: "power3.in"},'rocketOut')
            .to("#backSky",{duration:7, fill:"#021125", ease: "power3.in"},'rocketOut')
            .to("#rocketDoorLeft",{ delay:1.5, duration:6, x:0 }, "rocketOut")
            .to("#rocketDoorRight",{ delay:1.5, duration:6, x:33 }, "rocketOut");
            
            
            








export let flamesTL = gsap.timeline({paused:true});

flamesTL.to("#smallFlameLeft",{duration:0.45, scaleY:.75,yoyo:true, repeat:-1},"flames")
        .to("#largeFlameLeft",{duration:0.25, scaleY:.45,yoyo:true, repeat:-1},"flames")
        .to("#smallFlameRight",{duration:0.45, scaleY:.75,yoyo:true, repeat:-1},"flames")
        .to("#largeFlameRight",{duration:0.25, scaleY:.45,yoyo:true, repeat:-1},"flames")

function controlFlames(){
    flamesTL.play()
}



