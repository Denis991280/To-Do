var listDetail = document.getElementById("listDetail");
var addBtn = document.getElementById("addBtn");
var ul = document.getElementById("ul");

addBtn.onclick = function () {
  if (listDetail.value !== "") {
    var li = document.createElement("LI");
    ul.appendChild(li);
  }
  else {
    alert("List item cannot be empty");
  }

  var entry = document.createElement("SPAN");
  var entryText = document.createTextNode(listDetail.value);
  entry.className = "userEntry";
  entry.appendChild(entryText);
  li.appendChild(entry);

  var close = document.createElement("SPAN");
  var cText = document.createTextNode("\u00D7");
  close.className = "close";
  close.appendChild(cText);
  li.appendChild(close);
  close.onclick = function () {
      this.parentElement.style.display = "none";
  }

  var edit = document.createElement("SPAN");
  var eText = document.createTextNode("\u270E");
  edit.className = "edit";
  edit.appendChild(eText);
  li.appendChild(edit);
  edit.onclick = function () {
      var p = prompt("Edit your entry");
      var entry = this.parentElement.getElementsByClassName("userEntry")[0]; // get sibling userEntry element
      entry.innerText = p;
  }

  li.onclick = function () {
      this.classList.toggle("checked");
  }

  listDetail.value = "";
}