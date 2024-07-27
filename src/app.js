import { addressbar } from "./addressBar.js";
import { currentTime } from "./currentTime.js";
import { populate } from "./populateApps.js";

window.onload = function() {

    // realtime time output
    currentTime('clock');

    // populates the apps
    populate('app-list');

    // address bar control
    addressbar("webAddress", "addressBarButton");
}