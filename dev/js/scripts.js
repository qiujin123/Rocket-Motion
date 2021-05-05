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
        // .addLabel("marker")
        .add(rocketGoTL)
        // .addLabel("marker")
        .add(flightPathTL, "zoomFlight")
        .add(moonZoomTL, "zoomFlight")
        .add(landingTL);  

         


        // mainTL.play("marker");
        mainTL.play();

// GSDevTools.create();