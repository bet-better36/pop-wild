const audioElem1 = new Audio("audio/n.mp3");
const audioElem2 = new Audio("/audio/a.mp3");
const audioElem3 = new Audio("/audio/ko-up.mp3");
const audioElem4 = new Audio("/audio/ko-down.mp3");

let elem_volume = document.getElementById("volume");
let elem_range = document.getElementById("vol_range");

let currentAudio1 = audioElem1;
let currentAudio2 = audioElem2;

import { time } from '/timer.js';
import { clicks } from '/click-count.js';





function clickDownPlayAudio() {
    currentAudio2.pause();
    currentAudio2.currentTime = 0;
    if (clicks == 2) {
        currentAudio1 = audioElem3;
    }
    currentAudio1.loop = true;
    currentAudio1.play();
}
export { clickDownPlayAudio };


function preventAudioLoop() {
    currentAudio1.loop = false;
}
export { preventAudioLoop };

function clickUpPlayAudio() {
    let pitchRate = 10 / time;
    preventAudioLoop();
    console.log(pitchRate);
    if (pitchRate < 0.07) {
        pitchRate = 0.07;
    }

    if (currentAudio1 == audioElem3) {
        currentAudio2 = audioElem4;
    }

    if (currentAudio2 == audioElem4) {
        pitchRate = 0.8;
    }

    currentAudio2.playbackRate = pitchRate;
    currentAudio2.play();

    currentAudio1 = audioElem1;
    currentAudio2 = audioElem2;

}
export { clickUpPlayAudio };
