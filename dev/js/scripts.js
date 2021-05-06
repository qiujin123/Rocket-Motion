import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { faceChangeTL } from "./faceChange"
import { elevatorTL } from "./elevator"
import { rocketGoTL } from "./rocketGo"
import { flightPathTL } from "./flightPath"
import { moonZoomTL } from "./moonZoom"
import { landingTL } from "./landing"
import { dogMoonTL } from "./dogMoon"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL)
        .add(faceChangeTL)
        .add(elevatorTL)
        .add(rocketGoTL)
        .add(flightPathTL, "zoomFlight")
        .add(moonZoomTL, "zoomFlight")
        .add(landingTL)
        .add(dogMoonTL);  

        mainTL.play();

// GSDevTools.create();