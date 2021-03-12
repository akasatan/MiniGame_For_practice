
const second = 3;

var time = new Date();
document.getElementById("GameBlock").insertAdjacentHTML('beforebegin', "Start:");
// 終了時刻を開始日時+カウントダウンする秒数に設定
let endTime = new Date(time.getTime() + second * 1000);
document.getElementById("GameBlock").insertAdjacentHTML('beforebegin', endTime);

  // 1秒おきにカウントダウン
let count = second;
var IntervalId = setInterval(() =>{
  count--;
  document.getElementById("GameBlock").insertAdjacentHTML('beforebegin', count);
  // 現在日時と終了日時を比較
  time = new Date();
  if(time.getTime() >= endTime.getTime()){
    clearInterval(IntervalId);
    console.log("Finish!");
  }
}, 1000);