import dom from "../dom.js";
import { start } from "../components/clock.js";

const startClockEvent = () => {
    dom.startBtn.addEventListener('click', start);
    console.log("start");
};

export default startClockEvent;