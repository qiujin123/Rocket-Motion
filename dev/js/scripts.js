import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { elevatorTL } from "./elevator"
import { rocketGoTL } from "./rocketGo"
import { flightPathTL } from "./flightPath"
import { moonZoomTL } from "./moonZoom"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL)
        .add(elevatorTL)
        .add(rocketGoTL)
        .addLabel("marker")
        .add(flightPathTL, "zoomFlight")
        .add(moonZoomTL, "zoomFlight");  
         


        mainTL.play("marker");

// GSDevTools.create();