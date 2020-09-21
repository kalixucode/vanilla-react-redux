const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

// number.innerText = count;

const update = () => {
  number.innerText = count;
}
const handleAdd = () => {
  count = count + 1;
  update();
}
const handleMinus = () => {
  count = count - 1;
  update();
}



////////////////////////////////////
// let count = 0;
// const handleAdd = () => {
//   number.innerText = count ++;
// }
// const handleMinus = () => {
//   number.innerText = count --;
// }
/////////////////////////////////////
add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMinus);