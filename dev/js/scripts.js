import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { elevatorTL } from "./elevator"
import { rocketGoTL } from "./rocketGo"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL)
        .add(elevatorTL)
        .addLabel("marker")
        .add(rocketGoTL);  
         


        mainTL.play("marker");

// GSDevTools.create();