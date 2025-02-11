import dom from "../dom.js";
import { reset } from "../components/clock.js";


const resetClockEvent = () => {
    dom.resetBtn.addEventListener('click', reset);
}

export default resetClockEvent;
