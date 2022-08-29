let isDown = false;
let clickId;

const area = document.getElementById('clickarea');

import { start, stop, reset, time, } from '/timer.js';
import { clickCount, } from '/click-count.js';
import {
    clickDownPlayAudio,
    clickUpPlayAudio,
    preventAudioLoop,
} from '/audio.js';

['mousedown', 'touchstart'].forEach(evt =>
    area.addEventListener(evt, (e) => {
        e.preventDefault();
        isDown = true;
        countLoop();
        reset();
        start();
        // clickCount();
        clickDownPlayAudio();
    }, false)
);

['mouseup', 'touchend'].forEach(evt =>
    area.addEventListener(evt, (e) => {
        e.preventDefault();
        clearTimeout(clickId);
        stop();
        clickUpPlayAudio();
    }, false)
);

['mouseout',].forEach(evt =>
    area.addEventListener(evt, (e) => {
        e.preventDefault();
        clearTimeout(clickId);
        preventAudioLoop();
        stop();
    }, false)
);

const countLoop = () => {
    clickCount();
    clickId = setTimeout(countLoop, 100)
}


window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};
