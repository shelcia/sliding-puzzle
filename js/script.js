//DOM
//Heading 2
var heading2 = document.createElement("h2");
heading2.innerHTML = "Sliding tile Puzzle";
document.body.append(heading2);
//Instrction Modal
var modalInstruction = document.createElement("div");
modalInstruction.setAttribute("id", "myModal");
modalInstruction.setAttribute("class", "modal");
document.body.append(modalInstruction);
//modal content
var modalcontent = document.createElement("div");
modalcontent.setAttribute("class", "modal-content");
modalcontent.setAttribute("id", "modal-content");
document.getElementById("myModal").appendChild(modalcontent);
//close button
var close_button = document.createElement("span");
close_button.innerHTML = "&times;";
close_button.setAttribute("class", "close");
document.getElementById("modal-content").appendChild(close_button);
//instructions title
var instructions_title = document.createElement("p");
instructions_title.innerHTML = "Instructions";
document.getElementById("modal-content").appendChild(instructions_title);
//lists
var ulist = document.createElement("ul");
ulist.innerHTML =
  "<li>The game can be played in Two modes<ol><li>Timer Mode</li><li>Non-Timer Mode</li></ol></li><li>In timer Mode you will have to complete the game within 60 seconds to win.</li><li>To start timer Mode click the Button named Start</li><li>In case you want to reset the Timer click the button named Reset</li><li>If you want to Reset all tiles to their original place click ResetTile button</li><li>To play Non-Timer mode click shuffle to play</li><li>Difficulty level can be chosen in dropdown for both Modes</li>";
document.getElementById("modal-content").appendChild(ulist);
//para in the end
var foot = document.createElement("p");
foot.innerHTML = "Happy Gaming";
document.getElementById("modal-content").appendChild(foot);
//result modal
var result_modal = document.createElement("div");
result_modal.setAttribute("id", "ResModal");
result_modal.setAttribute("class", "modal");
document.body.append(result_modal);
// ..result modal content
var res_modalcontent = document.createElement("div");
res_modalcontent.setAttribute("class", "modal-content");
res_modalcontent.setAttribute("id", "res_modal_content");
document.getElementById("ResModal").appendChild(res_modalcontent);
//close button for result modal
var res_close_button = document.createElement("span");
res_close_button.innerHTML = "&times;";
res_close_button.setAttribute("class", "close");
res_close_button.setAttribute("id", "resclose");
document.getElementById("res_modal_content").appendChild(res_close_button);
//container header
var container1 = document.createElement("div");
container1.setAttribute("id", "container1");
container1.setAttribute("class", "container-header");
document.body.append(container1);
//div1.1 select options
var div11 = document.createElement("div");
div11.setAttribute("id", "div11");
document.getElementById("container1").appendChild(div11);
//select
var sel = document.createElement("select");
sel.setAttribute("class", "select");
sel.setAttribute("id", "Difficulty");
document.getElementById("div11").appendChild(sel);
//options
var opt1 = document.createElement("option");
opt1.setAttribute("value", "1");
opt1.innerHTML = "Easy";
document.getElementById("Difficulty").appendChild(opt1);
var opt2 = document.createElement("option");
opt2.setAttribute("value", "2");
opt2.innerHTML = "Medium";
document.getElementById("Difficulty").appendChild(opt2);
var opt3 = document.createElement("option");
opt3.setAttribute("value", "3");
opt3.innerHTML = "Difficult";
document.getElementById("Difficulty").appendChild(opt3);
//div 1.2
var div12 = document.createElement("div");
div12.setAttribute("id", "div12");
document.getElementById("container1").appendChild(div12);
//button inside div 1.2
var instruction_button = document.createElement("button");
instruction_button.setAttribute("id", "Instructions");
instruction_button.setAttribute("type", "button");
instruction_button.innerHTML = "Instructions";
document.getElementById("div12").appendChild(instruction_button);
//div 1.3
var div13 = document.createElement("div");
div13.setAttribute("id", "div13");
document.getElementById("container1").appendChild(div13);
//button inside div 1.3
var timer_button = document.createElement("button");
timer_button.setAttribute("id", "timer");
timer_button.setAttribute("type", "button");
timer_button.setAttribute("class", "timer");
timer_button.innerHTML = "Timer";
document.getElementById("div13").appendChild(timer_button);
//container for theme change
var containercolor = document.createElement("div");
containercolor.setAttribute("id", "containercolor");
containercolor.setAttribute("class", "color-container");
document.body.append(containercolor);
//div 1
var div1c = document.createElement("div");
div1c.setAttribute("id", "div1c");
document.getElementById("containercolor").appendChild(div1c);
//button 1c pink
var button1 = document.createElement("button");
button1.innerHTML = "Pink";
button1.setAttribute("id", "1c");
button1.setAttribute("onclick", "bgchange(id)");
button1.setAttribute(
  "style",
  "background: linear-gradient(to Right, #fe0e7e, #ff5ba7)"
);
document.getElementById("div1c").appendChild(button1);
//div 2
var div2c = document.createElement("div");
div2c.setAttribute("id", "div2c");
document.getElementById("containercolor").appendChild(div2c);
//button 1c pink
var button2 = document.createElement("button");
button2.innerHTML = "Green";
button2.setAttribute("id", "2c");
button2.setAttribute("onclick", "bgchange(id)");
button2.setAttribute(
  "style",
  "background: linear-gradient(to Right, #009f00, #00f700)"
);
document.getElementById("div2c").appendChild(button2);
//div 3
var div3c = document.createElement("div");
div3c.setAttribute("id", "div3c");
document.getElementById("containercolor").appendChild(div3c);
//button 3c pink
var button3 = document.createElement("button");
button3.innerHTML = "Yellow";
button3.setAttribute("id", "3c");
button3.setAttribute("onclick", "bgchange(id)");
button3.setAttribute(
  "style",
  "background: linear-gradient(to Right, #fbff00, #a1a400)"
);
document.getElementById("div3c").appendChild(button3);
//div 4
var div4c = document.createElement("div");
div4c.setAttribute("id", "div4c");
document.getElementById("containercolor").appendChild(div4c);
//button 4c pink
var button4 = document.createElement("button");
button4.innerHTML = "Blue";
button4.setAttribute("id", "4c");
button4.setAttribute("onclick", "bgchange(id)");
button4.setAttribute(
  "style",
  "background: linear-gradient(to Right, #0e2afe, #0016bd)"
);
document.getElementById("div4c").appendChild(button4);
//div 5
var div5c = document.createElement("div");
div5c.setAttribute("id", "div5c");
document.getElementById("containercolor").appendChild(div5c);
//button 1c pink
var button5 = document.createElement("button");
button5.innerHTML = "Purple";
button5.setAttribute("id", "5c");
button5.setAttribute("onclick", "bgchange(id)");
button5.setAttribute(
  "style",
  "background: linear-gradient(to Right, #b60efe, #690096)"
);
document.getElementById("div5c").appendChild(button5);

//container 2 or container body
var container2 = document.createElement("div");
container2.setAttribute("id", "container2");
container2.setAttribute("class", "container");
document.body.append(container2);
//tile1
var tile1 = document.createElement("div");
tile1.setAttribute("id", "1");
tile1.setAttribute("onclick", "move(id)");
tile1.innerHTML = "1";
document.getElementById("container2").appendChild(tile1);

//tile2
var tile2 = document.createElement("div");
tile2.setAttribute("id", "2");
tile2.setAttribute("onclick", "move(id)");
tile2.innerHTML = "2";
document.getElementById("container2").appendChild(tile2);

//tile1
var tile3 = document.createElement("div");
tile3.setAttribute("id", "3");
tile3.setAttribute("onclick", "move(id)");
tile3.innerHTML = "3";
document.getElementById("container2").appendChild(tile3);

//tile4
var tile4 = document.createElement("div");
tile4.setAttribute("id", "4");
tile4.setAttribute("onclick", "move(id)");
tile4.innerHTML = "4";
document.getElementById("container2").appendChild(tile4);

//tile5
var tile5 = document.createElement("div");
tile5.setAttribute("id", "5");
tile5.setAttribute("onclick", "move(id)");
tile5.innerHTML = "5";
document.getElementById("container2").appendChild(tile5);

//tile6
var tile6 = document.createElement("div");
tile6.setAttribute("id", "6");
tile6.setAttribute("onclick", "move(id)");
tile6.innerHTML = "6";
document.getElementById("container2").appendChild(tile6);

//tile7
var tile7 = document.createElement("div");
tile7.setAttribute("id", "7");
tile7.setAttribute("onclick", "move(id)");
tile7.innerHTML = "7";
document.getElementById("container2").appendChild(tile7);

//tile8
var tile8 = document.createElement("div");
tile8.setAttribute("id", "8");
tile8.setAttribute("onclick", "move(id)");
tile8.innerHTML = "8";
document.getElementById("container2").appendChild(tile8);

//tile9
var tile9 = document.createElement("div");
tile9.setAttribute("id", "9");
tile9.setAttribute("onclick", "move(id)");
tile9.innerHTML = "9";
document.getElementById("container2").appendChild(tile9);

//tile10
var tile10 = document.createElement("div");
tile10.setAttribute("id", "10");
tile10.setAttribute("onclick", "move(id)");
tile10.innerHTML = "10";
document.getElementById("container2").appendChild(tile10);

//tile11
var tile11 = document.createElement("div");
tile11.setAttribute("id", "11");
tile11.setAttribute("onclick", "move(id)");
tile11.innerHTML = "11";
document.getElementById("container2").appendChild(tile11);

//tile12
var tile12 = document.createElement("div");
tile12.setAttribute("id", "12");
tile12.setAttribute("onclick", "move(id)");
tile12.innerHTML = "12";
document.getElementById("container2").appendChild(tile12);

//tile13
var tile13 = document.createElement("div");
tile13.setAttribute("id", "13");
tile13.setAttribute("onclick", "move(id)");
tile13.innerHTML = "13";
document.getElementById("container2").appendChild(tile13);

//tile14
var tile14 = document.createElement("div");
tile14.setAttribute("id", "14");
tile14.setAttribute("onclick", "move(id)");
tile14.innerHTML = "14";
document.getElementById("container2").appendChild(tile14);

//tile15
var tile15 = document.createElement("div");
tile15.setAttribute("id", "15");
tile15.setAttribute("onclick", "move(id)");
tile15.innerHTML = "15";
document.getElementById("container2").appendChild(tile15);

//tile16
var tile16 = document.createElement("div");
tile16.setAttribute("id", "16");
tile16.setAttribute("class", "empty");
tile16.setAttribute("onclick", "move(id)");
tile16.innerHTML = "&nbsp";
document.getElementById("container2").appendChild(tile16);

//container 3 or container button
var container3 = document.createElement("div");
container3.setAttribute("id", "container3");
container3.setAttribute("class", "container-button");
document.body.append(container3);
//div3.1
div31 = document.createElement("div");
div31.setAttribute("id", "div31");
document.getElementById("container3").appendChild(div31);
//button in div3.1 Shuffle
shuffle_button = document.createElement("button");
shuffle_button.setAttribute("type", "button");
shuffle_button.setAttribute("onclick", "shuffle()");
shuffle_button.innerHTML =
  "Shuffle <i style='font-size:12px' class='material-icons'>shuffle</i>";
document.getElementById("div31").appendChild(shuffle_button);

//div3.2
div32 = document.createElement("div");
div32.setAttribute("id", "div32");
document.getElementById("container3").appendChild(div32);
//button in div3.3 Reset
reset_button = document.createElement("button");
reset_button.setAttribute("type", "button");
reset_button.setAttribute("onclick", "resetTimer()");
reset_button.innerHTML =
  "Reset <i style='font-size:12px' class='material-icons'>redo</i>";
document.getElementById("div32").appendChild(reset_button);

//div3.3
div33 = document.createElement("div");
div33.setAttribute("id", "div33");
document.getElementById("container3").appendChild(div33);
//button in div3.3 Start
start_button = document.createElement("button");
start_button.setAttribute("type", "button");
start_button.setAttribute("onclick", "startTimer()");
start_button.innerHTML =
  "Start <i style='font-size:12px' class='material-icons'>timer</i>";
document.getElementById("div33").appendChild(start_button);

//div3.4
div34 = document.createElement("div");
div34.setAttribute("id", "div34");
document.getElementById("container3").appendChild(div34);
//button in div3.4 Reload
reload_button = document.createElement("button");
reload_button.setAttribute("type", "button");
reload_button.setAttribute("onclick", "location.reload();");
reload_button.innerHTML =
  "ResetTile <i style='font-size:12px' class='material-icons'>crop_square</i>";
document.getElementById("div34").appendChild(reload_button);

//funtions begin here
let temp = "";
let empty_pos = 16;
let shuffle_dificulty = 1;
const move = id => {
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
    // console.log(" new empty " + empty_pos);
  } else {
    console.log("you can't change");
  }
};
//in order to constraint motion
const exchangeable = id => {
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

// const coins =()=>{
//   let result=correctPos()
//   if(result=="Congratulations .. You are indeed a master peice"){
//     get_time
//   }
// }

//timer global variables
let startTime;
let updatedTime;
let difference;
let tInterval;
let savedTime;
let paused = 0;
let running = 0;
let timerDisplay = document.getElementById("timer");

const startTimer = () => {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
  }
  shuffle();
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
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
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
button_Modal.onclick = function() {
  modal.style.display = "block";
};
close_btn.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
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
  console.log(result);
  res_modal_content.innerHTML = result;
};
res_close_btn.onclick = function() {
  res_modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == res_modal) {
    res_modal.style.display = "none";
  }
};

const bgchange = color => {
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
