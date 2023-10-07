
//Display current date
let storeDate = new Date();

const dateToday = document.getElementsByClassName("date");
dateToday[0].innerHTML = "Today: " + storeDate.toLocaleString('default', { month: 'long' }) + " " + storeDate.getDate() + "." + storeDate.getFullYear() + ".";

//Creating new task
let newTask = document.getElementById("submit-task");
let toDo = document.getElementById("to-do");
let taskInput = document.getElementById("task-input");

newTask.addEventListener("click", function(){
    const taskTitle = document.createElement("p");
    // taskTitle.classList.add("dodaj still za novi paragraph");
    taskTitle.innerHTML = taskInput.value;
    toDo.appendChild(taskTitle);
    taskInput.value = "";
    event.preventDefault();
    localStorage.setItem("task-input", taskInput);

})