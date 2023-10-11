let storeDate = new Date();

const dateToday = document.getElementsByClassName("date");
dateToday[0].innerHTML = "Today: " + storeDate.toLocaleString('default', { month: 'long' }) + " " + storeDate.getDate() + "." + storeDate.getFullYear() + ".";

const itemsArray = localStorage.getItem('dailyItems') ? JSON.parse(localStorage.getItem('dailyItems')) : [];

document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item")
  createItem(item)
})

document.querySelector("#item").addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    const item = document.querySelector("#item")
    createItem(item)
  }
})


function displayItems(){
  let items = ""
  for(let i = 0; i < itemsArray.length; i++){
    items += `<div class="item">
                <div class="input-controller">
                  <textarea disabled>${itemsArray[i]}</textarea>
                  <div class="edit-controller">
                  <div>
                  Delete: <i class="fa-solid fa-xmark fa-lg deleteBtn"></i>
                  </div>
                  <div>
                    Edit:  <i class="fa-solid fa-pencil fa-lg editBtn"></i>
                  </div>
                  </div>
                </div>
                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`
  }

  document.querySelector(".to-do-list").innerHTML = items
  activateDeleteListeners()
  activateEditListeners()
  activateSaveListeners()
  activateCancelListeners()
}

function activateDeleteListeners(){
  let deleteBtn = document.querySelectorAll(".deleteBtn")
  deleteBtn.forEach((dB, i) => {
    dB.addEventListener("click", () => { 
      deleteItem(i) 
    })
  })
}

function activateEditListeners(){
  const editBtn = document.querySelectorAll(".editBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  editBtn.forEach((eB, i) => {
    eB.addEventListener("click", () => { 
      updateController[i].style.display = "block"
      inputs[i].disabled = false })
  })
}

function activateSaveListeners(){
  const saveBtn = document.querySelectorAll(".saveBtn")
  const inputs = document.querySelectorAll(".input-controller textarea")
  saveBtn.forEach((sB, i) => {
    sB.addEventListener("click", () => {
      updateItem(inputs[i].value, i)
    })
  })
}

function activateCancelListeners(){
  const cancelBtn = document.querySelectorAll(".cancelBtn")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".input-controller textarea")
  cancelBtn.forEach((cB, i) => {
    cB.addEventListener("click", () => {
      updateController[i].style.display = "none"
      inputs[i].disabled = true
      inputs[i].style.border = "none"
    })
  })
}

function createItem(item){
  itemsArray.push(item.value)
  localStorage.setItem('dailyItems', JSON.stringify(itemsArray))
  location.reload()
}

function deleteItem(i){
  itemsArray.splice(i,1)
  localStorage.setItem('dailyItems', JSON.stringify(itemsArray))
  location.reload()
}

function updateItem(text, i){
  itemsArray[i] = text
  localStorage.setItem('dailyItems', JSON.stringify(itemsArray))
  location.reload()
}

window.onload = function() {
  displayItems()
};

function myFunction() {
  let x = document.querySelector(".auto-jsCalendar");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function refreshFunction() {
  location.reload(true);
}