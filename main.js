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

area.addEventListener('mousedown', () => {
    isDown = true;
    countLoop();
    reset();
    start();
    // clickCount();
    clickDownPlayAudio();


})

area.addEventListener('mouseup', () => {
    clearTimeout(clickId);
    stop();
    clickUpPlayAudio();
})

area.addEventListener('mouseout', () => {
    clearTimeout(clickId);
    preventAudioLoop();
    stop();
})



const countLoop = () => {
    clickCount();
    clickId = setTimeout(countLoop, 100)
}
