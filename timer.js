let timerId;
let time = 0;
export { time };
const timerLabel = document.getElementById('timerLabel');


// function deliverTimeVal() {
//     deliveryTime = time;
// }
// export { deliverTimeVal };

function start() {
    // スタートボタンを押せないようにする（これをしないと何回もスタートボタン押せてしまう）
    // startBtn.disabled = true;
    // timeをsetTimeoutで設定したミリ秒ごとに1プラスする
    time += 1;

    //分・秒・ミリ秒を計算
    let ms = time % 100;
    let sec = Math.floor(time / 100);
    let min = Math.floor(time / 100 / 60)

    // ms = ('0' + ms).slice(-3);

    // 分・秒・ミリ秒が１桁の場合は、先頭に０をつける
    if (min < 10) min = '0' + min;
    if (sec >= 60) sec = sec % 60; // 秒が60秒以上になった場合の処理（60になったら0になる）
    if (sec < 10) sec = '0' + sec;
    if (ms < 10) ms = '0' + ms;

    // let stms = ms.toString().padStart(2, '0');
    // timerLabelを更新
    timerLabel.innerHTML = min + 'm' + sec + 's' + ms + 'ms';

    // setTimeoutでstart関数をループさせるイメージ？
    timerId = setTimeout(start, 10);
}
export { start };


// STOPボタン
function stop() {

    // 停止する
    clearTimeout(timerId);


    // スタートボタンを押せるようにする
    // startBtn.disabled = false;
}
export { stop };


// RESETボタン
function reset() {
    // 停止する
    clearTimeout(timerId);
    // タイムを0に戻す
    time = 0;
    // タイマーラベルをリセット


    timerLabel.innerHTML = '00m00s00ms';
    // スタートボタンを押せるようにする
    // startBtn.disabled= false;
}
export { reset };
