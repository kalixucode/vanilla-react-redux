import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
    return {
        type: ADD_TODO, 
        text
    }
}
const deleteToDo = id => {
    return {
        type: DELETE_TODO,
        id
    }
}

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, {text: action.text, id: Date.now()}]; //return state.push(action.text); !!Wrong!! push하면 mutate가 생김!!, ...state: 과거의 state
            //반드시 새로운 array object를 리턴해야지 원래의 state를 변형시키면 안됨.
        case DELETE_TODO:
            return state.filter(toDo => toDo.id !==action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

const dispatchAddToDo = text => {
    store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = e => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li =document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}


store.subscribe(paintToDos);

// const createToDo = toDo => {
//     const li= document.createElement("li");
//     li.innerText = toDo;
//     ul.appendChild(li);
// };

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    // createToDo(toDo);
    dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);