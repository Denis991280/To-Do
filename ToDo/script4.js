let storeDate = new Date();

const dateToday = document.getElementsByClassName("date");
dateToday[0].innerHTML = "Today: " + storeDate.toLocaleString('default', { month: 'long' }) + " " + storeDate.getDate() + "." + storeDate.getFullYear() + ".";

const itemsArray = localStorage.getItem('dailyItems') ? JSON.parse(localStorage.getItem('dailyItems')) : [];
const itemsArray2 = localStorage.getItem('itemsUrgent') ? JSON.parse(localStorage.getItem('itemsUrgent')) : [];
const itemsArray3 = localStorage.getItem('itemsFuture') ? JSON.parse(localStorage.getItem('itemsFuture')) : [];
let dailyCount = document.querySelector(".dailyCounterActive");


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
                  <textarea disabled class="select">${itemsArray[i]}</textarea>
                  <div class="edit-controller"> 

                    <div>
                      <i class="fa-solid fa-xmark fa-lg deleteBtn"></i>
                    </div>

                    <div>
                      <i class="fa-solid fa-pencil fa-md editBtn"></i>
                    </div>

                  </div>
                </div>

                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`
  dailyCount.innerHTML++;

  }
  for(let i = 0; i < itemsArray2.length; i++){
    items += `<div class="item">

                <div class="input-controller">
                  <textarea disabled class="select">${itemsArray2[i]}</textarea>
                  <div class="edit-controller"> 

                    <div>
                      <i class="fa-solid fa-xmark fa-lg deleteBtn"></i>
                    </div>

                    <div>
                      <i class="fa-solid fa-pencil fa-md editBtn"></i>
                    </div>

                  </div>
                </div>

                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`
  dailyCount.innerHTML++;

  }
  for(let i = 0; i < itemsArray3.length; i++){
    items += `<div class="item">

                <div class="input-controller">
                  <textarea disabled class="select">${itemsArray3[i]}</textarea>
                  <div class="edit-controller"> 

                    <div>
                      <i class="fa-solid fa-xmark fa-lg deleteBtn"></i>
                    </div>

                    <div>
                      <i class="fa-solid fa-pencil fa-md editBtn"></i>
                    </div>

                  </div>
                </div>

                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`
  dailyCount.innerHTML++;

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
    dB.addEventListener("click", () => { deleteItem(i) })
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

function calendarToggle() {
  let o = document.querySelector(".auto-jsCalendar");

  if (o.style.display === "block") {
    o.style.display = "none";
  } else {
    o.style.display = "block";
  }
}

function createToggle() {
  let x = document.querySelector("#enter");
  let y = document.querySelector("#item");
  

  if (x.style.display === "inline-block" && y.style.display === "inline-block") {
    x.style.display = "none";
    y.style.display = "none";
  } else {
    x.style.display = "inline-block";
    y.style.display = "inline-block";
  }
}

// function highlight(param) { 

//   let markText = new Mark(document.querySelectorAll(".select")); 

//   markText.unmark(); 

//   markText.mark( 
//     document.getElementById("searched").value.style.color = "blue", 
//     { className: 'a' + param }
//   ); 
// } 



function refreshFunction() {
  location.reload(true);
}

