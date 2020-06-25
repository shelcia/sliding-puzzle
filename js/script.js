let temp = "";
let empty_pos = 16;
const move = id => {
  let movable_pos = exchangeable(id);
  console.log("empty " + empty_pos);
  console.log(movable_pos);
  if (movable_pos.includes(empty_pos)) {
    let tileprev = document.getElementById(id);
    let tilenext = document.getElementById(empty_pos);
    temp = tileprev.innerHTML;
    tileprev.innerHTML = tilenext.innerHTML;
    tilenext.innerHTML = temp;
    document.getElementById(id).setAttribute("class", "empty");
    document.getElementById(empty_pos).removeAttribute("class");
    empty_pos = id;
    console.log(" new empty " + empty_pos);
  } else {
    console.log("you cant change");
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
