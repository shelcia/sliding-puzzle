let temp = "";
let empty_pos = 16;
const move = id => {
  //inner HTML changed
  console.log("empty " + empty_pos);

  let tileprev = document.getElementById(id);
  let tilenext = document.getElementById(empty_pos);
  temp = tileprev.innerHTML;
  tileprev.innerHTML = tilenext.innerHTML;
  tilenext.innerHTML = temp;
  //class change
  document.getElementById(id).setAttribute("class", "empty");
  document.getElementById(empty_pos).removeAttribute("class");
  empty_pos = id;
  console.log("empty " + empty_pos);
};
// const findEmptyPos = id => {};
