import { currentTime } from "./currentTime.js";
import { populate } from "./populateApps.js";

window.onload = function() {

    // realtime time output
    currentTime('clock');

    populate('app-list');
}