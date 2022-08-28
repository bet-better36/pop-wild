
let clicks = 0;
export { clicks };
const countDisp = document.getElementById('countDisp');

import { time, } from '/timer.js';






function clickCount() {

    clicks += 1;
    countDisp.innerHTML = clicks;

}
export { clickCount };
