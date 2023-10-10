const inputTask = document.getElementById("item");
const todoContainer = document.getElementById("to-do-list");

function addTask() {
  if(inputTask.value === "") {
    alert("Task name can't be empty!")
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputTask.value;
    todoContainer.appendChild(listItem);
    let deleteIcon = document.createElement("span");
    let editIcon = document.createElement("span");
    deleteIcon.innerHTML = "<i class=\"fa-solid fa-xmark fa-lg deleteBtn\"></i>";
    editIcon.innerHTML = "<i class=\"fa-solid fa-pencil fa-lg editBtn\"></i>";
    listItem.appendChild(deleteIcon);
    listItem.appendChild(editIcon);
  }
  inputTask.value = "";
  saveStorage();
}



todoContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked")
    saveStorage();
  } 
  else if (e.target.tagName === "I"){
    e.target.parentElement.parentElement.remove();
    saveStorage();
  }
    saveStorage();
}, false);

function saveStorage(){
  localStorage.setItem("tasks", todoContainer.innerHTML);
}

function displayStorage() {
  todoContainer.innerHTML = localStorage.getItem("tasks");
}
displayStorage();