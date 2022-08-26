// ストップウオッチの関数定義
let stopwatch = document.querySelector(".stopwatch");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset"); 

// 数字の定義
let startTime;
let stopTime;
let time = 0;
let plusTime = 0;

// 数字の動き方の関数
function runWatch(){
  let m = Math.floor((time % 60000) / 100);
  let s = Math.floor((time % 60000) / 1000);
  let ms = Math.floor((time / 60000) % 60);
  let hs = Math.floor(time / 3600000);  

//数字の表示方法  
  m = ("0" + m).slice(-1);
  s = ("0" + s).slice(1);
  ms = ("0" + ms).slice(1);
  hs = ("0" + hs).slice(1);

//HTMLに反映させる
  stopwatch.textContent = hs + ":" + ms + ":" + s + ":" + m;
}

// 時間を止めた時と、再開した時の表示の仕方
function countUp(){
  stopTime = setTimeout(function(){
    time = Date.now() - startTime + plusTime;
    runWatch();
    countUp();
  },10)
}

// スタートボタンの定義
function startTimer(){
  startTime = Date.now();
  countUp();
  start.setAttribute("disabled",true);
  stop.removeAttribute("disabled");
  reset.removeAttribute("disabled");
}

// ストップボタンの定義
 function stopTimer(){
   clearInterval(stopTime);
   plusTime += Date.now() - startTime;
   stop.setAttribute("disabled",true);
   start.removeAttribute("disabled");
 }
 
// リセットボタンの定義
  function resetTimer(){
    clearInterval(stopTime);
    time = 0;
    plusTime = 0;
    runWatch();
    start.removeAttribute("disabled");
    stop.setAttribute("disabled",true);
    reset.setAttribute("disabled",true);
  }