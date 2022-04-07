// Variable selectors
const form = document.querySelector("#form");
const todo = document.querySelector("#todoList");
const names = document.querySelector("#name");
const greet = document.querySelector(".greet");
const addTaskInput = document.querySelector("#addTaskInput");
const addTaskBtn = document.querySelector(".addTask");
const todoInput = document.querySelector("#todoInput")
const taskList = document.querySelector(".taskList")


// Event Listneners
form.addEventListener("submit", submitHandler);
addTaskBtn.addEventListener("click", addTaskhandler);



//functions
function submitHandler(event) {
    //prevents the form from submitting
    event.preventDefault();
    greet.innerText = "Welcome, " + names.value;
    form.style.display = "none"
    todo.style.display = "block";
}

function addTaskhandler() {
    const newDiv = document.createElement("div");
    taskList.appendChild(newDiv);
    //todoInput.value = addTaskInput.value;
    alert("div created")
}
