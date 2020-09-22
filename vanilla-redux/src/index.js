import { createStore } from "redux";


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  //state = 0 : initializing state
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
 
  // if (action.type === "ADD") { 
  //   console.log(count, action);
  //   return count + 1;
  // } else if (action.type === "MINUS") {
  //   console.log(count, action);
  //   return count - 1;
  // } else {
  //   return count;
  // }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type: ADD}); //must to be object!
}
const handleMinus = () => {
  countStore.dispatch({type: MINUS}); //string을 쓰는건 자바에서 고쳐주지 못한다. ㅜㅜ 그래서 MINUS로
}
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// add.addEventListener("Click ", () => countStore.dispatch({type: "ADD"}));
// minus.addEventListener("Click ", () => countStore.dispatch({type: "MINUS"}));

// countStore.dispatch({ type: "ADD" }); //dispatch(action)을 호출하면 reducer(countModifier)를 호출
// countStore.dispatch({ type: "MINUS" });
// countStore.dispatch({ type: "MINUS" });
// countStore.dispatch({ type: "ADD" });

// console.log(countStore.getState());
// const reducer = () => {};
// const store = createStore(reducer);
// //store를 만들면 reducer(data를 수정하는 함수)를 만들어줘야 한다.


// //////////////1번째 방법
// let count = 0;

// const update = () => {
//   number.innerText = count;
// }
// const handleAdd = () => {
//   count = count + 1;
//   update();
// }
// const handleMinus = () => {
//   count = count - 1;
//   update();
// }



///////////////2번째 방법/////////////
// let count = 0;
// const handleAdd = () => {
//   number.innerText = count ++;
// }
// const handleMinus = () => {
//   number.innerText = count --;
// }
/////////////////////////////////////
// add.addEventListener("click",handleAdd);
// minus.addEventListener("click",handleMinus);