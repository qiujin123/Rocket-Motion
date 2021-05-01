import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { elevatorTL } from "./elevator"
import { rocketGoTL } from "./rocketGo"
import { flightPathTL } from "./flightPath"
import { moonZoomTL } from "./moonZoom"
import { landingTL } from "./landing"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL)
        .add(elevatorTL)
        .add(rocketGoTL)
        .add(flightPathTL, "zoomFlight")
        .add(moonZoomTL, "zoomFlight")
        .addLabel("marker")
        .add(landingTL);  

         


        mainTL.play("marker");

// GSDevTools.create();