let storeDate = new Date();

const dateToday = document.getElementsByClassName("date");
dateToday[0].innerHTML = "Today: " + storeDate.toLocaleString('default', { month: 'long' }) + " " + storeDate.getDate() + "." + storeDate.getFullYear() + ".";

const itemsArray = localStorage.getItem('dailyItems') ? JSON.parse(localStorage.getItem('dailyItems')) : [];
const itemsArray2 = localStorage.getItem('itemsUrgent') ? JSON.parse(localStorage.getItem('itemsUrgent')) : [];
const itemsArray3 = localStorage.getItem('itemsFuture') ? JSON.parse(localStorage.getItem('itemsFuture')) : [];



function displayItems(){
  let items = ""
  for(let i = 0; i < itemsArray.length; i++){
    items += `<div class="item">
                <div class="input-controller">
                  <textarea disabled>${itemsArray[i]}</textarea>
                  <div class="edit-controller">

                  </div>
                </div>
                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`
  }

  for(let i = 0; i < itemsArray2.length; i++){
    items += `<div class="item">
                <div class="input-controller">
                  <textarea disabled>${itemsArray2[i]}</textarea>
                  <div class="edit-controller">
                  </div>
                </div>
                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`
  }

  for(let i = 0; i < itemsArray3.length; i++){
    items += `<div class="item">
                <div class="input-controller">
                  <textarea disabled>${itemsArray3[i]}</textarea>
                  <div class="edit-controller">
                  </div>
                </div>
                <div class="update-controller">
                  <button class="saveBtn">Save</button>
                  <button class="cancelBtn">Cancel</button>
                </div>
              </div>`
  }
  document.querySelector(".to-do-list").innerHTML = items
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