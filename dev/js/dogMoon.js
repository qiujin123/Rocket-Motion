import { gsap } from "gsap";

export let dogMoonTL = gsap.timeline();


dogMoonTL.to("#Space",{duration:3, scale:1},"moonZoomOut")
            .to("#moon",{duration:3, scale:1.5, y:400},"moonZoomOut")
            .to("#rocket",{duration:3, scale:.3, y:-975},"moonZoomOut")
            .fromTo("#dogMoon",{alpha:0},{alpha:1, duration:3,ease:"none"},"toTheMoon")
            .fromTo("#toTheMoon",{alpha:0},{alpha:1, duration:3,ease:"none"},"toTheMoon")