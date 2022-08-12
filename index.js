let clicks = 0;
let downtime = 0;

const audioElem1 = new Audio("n.mp3");
const audioElem2 = new Audio("a.mp3");

clickdown.

function clickdown() {
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;

    audioElem1.loop = true;
    audioElem1.play();

}

function clickup() {
    audioElem1.loop = false;
    audioElem2.playbackRate = 0.5;
    audioElem2.play();
};
