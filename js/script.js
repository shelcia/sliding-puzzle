//funtions begin here
let temp = "";
let empty_pos = 16;
let shuffle_dificulty = 1;

const move = (id) => {
  let movable_pos = exchangeable(id);
  // console.log(movable_pos);
  // console.log("empty " + empty_pos);
  let constrictMoment = isThere(movable_pos, empty_pos);
  if (constrictMoment) {
    let tileprev = document.getElementById(id);
    let tilenext = document.getElementById(empty_pos);
    temp = tileprev.innerHTML;
    tileprev.innerHTML = tilenext.innerHTML;
    tilenext.innerHTML = temp;
    document.getElementById(id).setAttribute("class", "empty");
    document.getElementById(empty_pos).removeAttribute("class");
    empty_pos = id;
  } else {
    console.log("you can't change");
  }
};
//in order to constraint motion
const exchangeable = (id) => {
  if (id == 1) return [2, 5];
  if (id == 2) return [1, 3, 6];
  if (id == 3) return [2, 4, 7];
  if (id == 4) return [3, 8];
  if (id == 5) return [1, 6, 9];
  if (id == 6) return [2, 5, 7, 10];
  if (id == 7) return [3, 6, 8, 11];
  if (id == 8) return [4, 7, 12];
  if (id == 9) return [5, 10, 13];
  if (id == 10) return [6, 9, 11, 14];
  if (id == 11) return [7, 10, 12, 15];
  if (id == 12) return [8, 11, 13, 16];
  if (id == 13) return [9, 14];
  if (id == 14) return [10, 13, 15];
  if (id == 15) return [11, 14, 16];
  if (id == 16) return [12, 15];
};

const isThere = (movable_pos, empty_pos) => {
  let k = 0;
  for (let i in movable_pos) {
    if (movable_pos[i] == empty_pos) k++;
  }
  if (k == 0) return false;
  else return true;
};
const select_difficulty = () => {
  let difficulty_option = document.getElementById("Difficulty").selectedIndex;
  shuffle_dificulty = document.getElementsByTagName("option")[difficulty_option]
    .value;
};
const shuffle = () => {
  let rand;
  select_difficulty();
  console.log(shuffle_dificulty);
  switch (shuffle_dificulty) {
    case "1":
      for (let i = 0; i < 100; i++) {
        rand = Rand();
        move(rand);
      }
      break;
    case "2":
      for (let i = 0; i < 200; i++) {
        rand = Rand();
        move(rand);
      }
      break;
    case "3":
      for (let i = 0; i < 300; i++) {
        rand = Rand();
        move(rand);
      }
      break;
  }
};

const Rand = () => {
  let min = 1;
  let max = 16;
  let random = Math.floor(Math.random() * (+max - +min)) + +min;
  return random;
};

const correctPos = () => {
  let a1 = document.getElementById("1");
  // console.log(a1.innerHTML);
  let a2 = document.getElementById("2");
  let a3 = document.getElementById("3");
  let a4 = document.getElementById("4");
  let a5 = document.getElementById("5");
  let a6 = document.getElementById("6");
  let a7 = document.getElementById("7");
  let a8 = document.getElementById("8");
  let a9 = document.getElementById("9");
  let a10 = document.getElementById("10");
  let a11 = document.getElementById("11");
  let a12 = document.getElementById("12");
  let a13 = document.getElementById("13");
  let a14 = document.getElementById("14");
  let a15 = document.getElementById("15");
  if (
    a1.innerHTML == "1" &&
    a2.innerHTML == "2" &&
    a3.innerHTML == "3" &&
    a4.innerHTML == "4" &&
    a5.innerHTML == "5" &&
    a6.innerHTML == "6" &&
    a7.innerHTML == "7" &&
    a8.innerHTML == "8" &&
    a9.innerHTML == "9" &&
    a10.innerHTML == "10" &&
    a11.innerHTML == "11" &&
    a12.innerHTML == "12" &&
    a13.innerHTML == "13" &&
    a14.innerHTML == "14" &&
    a15.innerHTML == "15"
  ) {
    return "Congratulations .. You are indeed a master peice";
  } else {
    return "Better luck next time.. We feel you bruh!";
  }
};

//timer global variables
let startTime;
let updatedTime;
let difference;
let tInterval;
let savedTime;
let paused = 0;
let running = 0;
let timerDisplay = document.getElementById("timer");
let finish_buttons = document.getElementById("finish_btn");
let seconds = 0;

const startTimer = () => {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
    shuffle();
    finish_buttons.style.display = "block";
  }
};
const resetTimer = () => {
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  seconds = "0";
  timerDisplay.innerHTML = seconds + "s";
};

const getShowTime = () => {
  updatedTime = new Date().getTime();
  if (savedTime) {
    difference = updatedTime - startTime + savedTime;
  } else {
    difference = updatedTime - startTime;
  }
  seconds = Math.floor((difference % (1000 * 60)) / 1000);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.innerHTML = seconds + "s";
  if (seconds == 59) {
    // pauseTimer();
    resetTimer();
    correctPos();
    resultModal();
  }
};

let button_Modal = document.getElementById("Instructions");
let modal = document.getElementById("myModal");
let close_btn = document.getElementsByClassName("close")[0];
button_Modal.onclick = function () {
  modal.style.display = "block";
};
close_btn.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// let resbutton_Modal = document.getElementById("Instructions");
let res_modal = document.getElementById("ResModal");
let res_modal_content = document.getElementById("res_modal_content");
let res_close_btn = document.getElementById("resclose");

const resultModal = () => {
  res_modal.style.display = "block";
  let result = correctPos();
  // console.log(result);
  res_modal_content.innerHTML = result;
};
res_close_btn.onclick = function () {
  res_modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == res_modal) {
    res_modal.style.display = "none";
  }
};
const resultModal_before = (time_taken, coins_earned) => {
  console.log(time_taken);
  res_modal.style.display = "block";
  let result = correctPos();
  res_modal_content.innerHTML = result + "      " + "coins :   " + coins_earned;
};
const coins = (time) => {
  let result = correctPos();
  if (result == "Congratulations .. You are indeed a master peice") {
    return (60 - time) * 100;
  } else {
    return "better luck next time ";
  }
};
const Finish_task = () => {
  resetTimer();
  let time_elapsed = seconds;
  console.log(time_elapsed);
  let coins_earned = coins(time_elapsed);
  resultModal_before(time_elapsed, coins_earned);
  finish_buttons.style.display = "none";
};
const bgchange = (color) => {
  // let x = document.body.style.background;
  switch (color) {
    case "1c":
      document.body.style.background =
        "linear-gradient(to Right, #fe0e7e, #ff5ba7)";
      break;
    case "2c":
      document.body.style.background =
        "linear-gradient(to Right, #009f00, #00f700)";
      break;
    case "3c":
      document.body.style.background =
        "linear-gradient(to Right, #fbff00, #a1a400)";
      break;
    case "4c":
      document.body.style.background =
        "linear-gradient(to Right, #0e2afe, #0016bd)";
      break;
    case "5c":
      document.body.style.background =
        "linear-gradient(to Right, #b60efe, #690096)";
      break;
  }
};
