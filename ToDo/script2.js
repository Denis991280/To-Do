let storeDate = new Date();

const dateToday = document.getElementsByClassName("date");
dateToday[0].innerHTML = "Today: " + storeDate.toLocaleString('default', { month: 'long' }) + " " + storeDate.getDate() + "." + storeDate.getFullYear() + ".";

const itemsArray = localStorage.getItem('itemsFuture') ? JSON.parse(localStorage.getItem('itemsFuture')) : [];

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
                  <p contenteditable="true" class="select">${itemsArray[i]}</p>
                  <div class="edit-controller">
                  <div>
                  <i class="fa-solid fa-xmark fa-lg deleteBtn"></i>
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
}

function activateDeleteListeners(){
  let deleteBtn = document.querySelectorAll(".deleteBtn")
  deleteBtn.forEach((dB, i) => {
    dB.addEventListener("click", () => { 
      deleteItem(i) 
    })
  })
}

function createItem(item){
  itemsArray.push(item.value)
  localStorage.setItem('itemsFuture', JSON.stringify(itemsArray))
  location.reload()
}

function deleteItem(i){
  itemsArray.splice(i,1)
  localStorage.setItem('itemsFuture', JSON.stringify(itemsArray))
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

function searchToggle() {
  let x = document.querySelector("#searched");
  let y = document.querySelector(".searchBtn");
  

  if (x.style.display === "inline-block" && y.style.display === "inline-block") {
    x.style.display = "none";
    y.style.display = "none";
  } else {
    x.style.display = "inline-block";
    y.style.display = "inline-block";
  }
}

function highlight(param) { 

  let markText = new Mark(document.querySelectorAll(".select")); 

  markText.unmark(); 

  markText.mark( 
    document.getElementById("searched").value, 
    { className: 'a' + param }
  ); 
} 

function refreshFunction() {
  location.reload(true);
}

