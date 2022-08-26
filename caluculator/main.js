// データ
let board = "";
// =で計算したかどうか
let pushEqual = false;



// 初期表示
window.onload = function() {
  board = document.getElementById('board');
}

// クリア表示
function clearNumber(AC){
  board.value = 0;
  pushEqual = false;
}

function number(pushNumber){
  if(pushEqual) board.value = "0";
  pushEqual = false;  
// 0が先頭の時は0を押しても反応しない
  if(board.value == "0" && pushNumber == "0"){
    board.value = "0";
// ０が先頭の時は００を押しても反応しない
  }else if(board.value == "0" && pushNumber == "00"){
    board.value = "0";
// コンマを押したときは先頭が０でも反応する
  }else if(board.value == "0" && pushNumber == "."){
    board.value = "0.";
// ０表示の時は、押した数字に上書きされる  
  }else if(board.value == "0"){
    board.value = pushNumber;
// コンマを重複させない
  }else if(board.value.slice(-1)  == "." && pushNumber == "."){
  pushNumber = "";
// 0以外の数字が先頭の時は、後ろに数字が文字列型に足されていく
  }else{
    board.value += pushNumber;
  }
}

function calCulator(pushNumber){
  if(pushEqual) pushEqual = false;
  
  if(board.value.slice(-1).includes("+")) {
  　board.value = board.value.slice(0,-1) + pushNumber;
  }else if(board.value.slice(-1).includes("-")){
    board.value = board.value.slice(0,-1) + pushNumber;
  }else if(board.value.slice(-1).includes("*")){
    board.value = board.value.slice(0,-1) + pushNumber;
  }else if(board.value.slice(-1).includes("/")){
    board.value = board.value.slice(0,-1) + pushNumber;  
  }else{
    board.value += pushNumber; 
  }
}

function equal(pushNumber){
  board.value = eval(board.value);
  pushEqual = true;
}