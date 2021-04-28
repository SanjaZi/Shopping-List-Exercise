/* 1. If you click on the list item, it toggles the .done  class on and off.*/
//2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button"); //Have to create button here too, for new buttons when the new list elements are added
	button.innerHTML = "Delete Me";
	button.style.backgroundColor = "white";
	button.style.border = "1px solid grey";
	button.style.marginLeft = "7px";
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button);
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// Event Delegation. Get the element, add a click listener...
ul.addEventListener("click", function(e) {
  // e.target is the clicked element!
  // If it was a list item
  if(e.target.nodeName == "LI") {
    // List item found! Output the ID!
    e.target.classList.toggle("done");
   }
});

//CREATING A BUTTON AFTER THE EXISTING LIST ITEMS
function createButtonElement() {
  var a = document.querySelectorAll("li");

  for (var v = 0; v < a.length; v++) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete Me"));
    a[v].appendChild(btn);
    btn.style.backgroundColor = "white";
    btn.style.border = "1px solid grey";
    btn.style.marginLeft = "7px";

  }
}

createButtonElement();

//REMOVING A BUTTON

ul.addEventListener("click", function(e) {
  // e.target is the clicked element!
  // If it was a list item
  if(e.target.nodeName == "BUTTON") {
    // List item found!  Output the ID!
    //e.target.remove(); THIS WAS CAUSING ME PROBLEMS UNTIL I DELETED IT!
    e.target.parentElement.remove();
    //e.target.parentNode.remove(); THIS ALSO WORKS.
   }
});


