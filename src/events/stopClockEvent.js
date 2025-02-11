import dom from "../dom.js";
import { stop } from "../components/clock.js";

const stopClockEvent = () => {
    dom.stopBtn.addEventListener('click', stop);
}

export default stopClockEvent;