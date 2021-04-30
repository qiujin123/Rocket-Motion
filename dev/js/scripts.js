import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { elevatorTL } from "./elevator"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL)
        .addLabel("marker")
        .add(elevatorTL);  
         


        mainTL.play("marker");

// GSDevTools.create();