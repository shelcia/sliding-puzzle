//FUNCTIONS BEGIN HERE

let temp = "";
let empty_pos = 16;
let shuffle_dificulty = 1;
const resultAlert = document.getElementById("result");

//MOVE THE TILE BASED ONCLICK EVENT

const move = (id) => {
  let movable_pos = exchangeable(id);
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
  }
};

//ALL POSSIBLE TILE LOCATIONS

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

//CHECKS IF THERS A EMPTY SPACE
const isThere = (movable_pos, empty_pos) => {
  let k = 0;
  for (let i in movable_pos) {
    if (movable_pos[i] == empty_pos) k++;
  }
  if (k == 0) return false;
  else return true;
};

// USER SELECTION ON DIFFICULTY

const select_difficulty = () => {
  let difficulty_value = document.getElementById("Difficulty").value;

  if (difficulty_value === 1) {
    shuffle_dificulty = "1";
  } else if (difficulty_value <= 50) {
    shuffle_dificulty = "2";
  } else if (difficulty_value <= 100) {
    shuffle_dificulty = "3";
  }
};

//SHUFFLE RANDOMLY

const shuffle = () => {
  resultAlert.style.display = "none";
  let rand;
  select_difficulty();
  console.log({ shuffle_dificulty });
  switch (shuffle_dificulty) {
    //EASY LEVEL SHUFFLE
    case "1":
      for (let i = 0; i < 100; i++) {
        rand = Rand();
        move(rand);
      }
      break;
    //MEDIUM LEVEL SHUFFLE
    case "2":
      for (let i = 0; i < 200; i++) {
        rand = Rand();
        move(rand);
      }
      break;
    //DIFFICULT LEVEL SHUFFLE
    case "3":
      for (let i = 0; i < 300; i++) {
        rand = Rand();
        move(rand);
      }
      break;
  }
};

//PRODUCES RANDOM NUMBER TO SHUFFLE

const Rand = () => {
  let min = 1;
  let max = 16;
  let random = Math.floor(Math.random() * (+max - +min)) + +min;
  return random;
};

//VERIFICATION IF ALL TILES ARE IN CORRECT POSITION EITHER WHEN AFTER 60 SECONDS OR WHEN USER CLICKS FINISH

const correctPos = () => {
  let a1 = document.getElementById("1");
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

//ALL TIMER FUNCTIONS

//ALL GLOBAL VARIABLES

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

//START TIMER FOR THE GAME ON USER CLICKING START BUTTON

const startTimer = () => {
  // console.log("running");
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
    shuffle();
    resultAlert.style.display = "none";
    finish_buttons.style.display = "block";
  }
};

//RESET TIMER TO 0 SECOND FOR THE GAME ON USER CLICKING RESET BUTTON

const resetTimer = () => {
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  seconds = "0";
  timerDisplay.innerHTML = "00:" + seconds + "0";
  // + "s"
  resultAlert.style.display = "none";
};

//DISPLAYING TIMER TRIGGERS ON STARTING THE TIMER ENDS AT 60 SECONDS

const getShowTime = () => {
  updatedTime = new Date().getTime();
  if (savedTime) {
    difference = updatedTime - startTime + savedTime;
  } else {
    difference = updatedTime - startTime;
  }
  seconds = Math.floor((difference % (1000 * 60)) / 1000);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.innerHTML = "00:" + seconds;
  // + "s"
  if (seconds == 59) {
    resetTimer();
    correctPos();
    resultModal();
  }
};

const resultModal = () => {
  let result = correctPos();
  finish_buttons.style.display = "none";
  const resultAlert = document.getElementById("result");
  resultAlert.style.display = "block";
  resultAlert.innerHTML = `${result}`;
};
const resultModal_before = (time_taken) => {
  // console.log(time_taken);
  let result = correctPos();
  resultAlert.style.display = "block";
  resultAlert.innerHTML = `${result}`;
};

const Finish_task = () => {
  resetTimer();
  let time_elapsed = seconds;
  console.log(time_elapsed);
  resultModal_before(time_elapsed);
  finish_buttons.style.display = "none";
};

// SELECT DIFFICULTY

// var slider = document.getElementById("Difficulty");

// slider.oninput = () => {
//   if (this.value > 0 && this.value < 50) {
//     this.value = 50;
//   } else if (this.value > 50) {
//     this.value = 100;
//   } else {
//     this.value = 0;
//   }
// };

// MODAL
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
