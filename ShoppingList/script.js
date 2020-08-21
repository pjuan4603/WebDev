var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	input.value = "";

	// li elements onclick toggle class ".done"
	li.addEventListener("click", function() {
		this.classList.toggle("done");
	})

	// adding button to the end of list
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode(" Delete "));
	li.appendChild(btn);
	btn.onclick = _delete_;
}

function _delete_(event){
	event.target.parentNode.remove();
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
