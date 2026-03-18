// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if(name === "" || email === "" || message === ""){
alert("Please fill all fields");
e.preventDefault();
return;
}

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!email.match(emailPattern)){
alert("Enter valid email");
e.preventDefault();
return;
}

alert("Form submitted successfully");

});


// To Do List with Delete Button
function addTask(){

let input = document.getElementById("taskInput");
let task = input.value.trim();

if(task === ""){
alert("Enter a task");
return;
}

let li = document.createElement("li");

// Task text
let span = document.createElement("span");
span.textContent = task;

// Delete button
let btn = document.createElement("button");
btn.textContent = "Delete";
btn.classList.add("delete-btn");

// Delete action
btn.onclick = function(){
li.remove();
};

// Mark complete
span.onclick = function(){
span.style.textDecoration = "line-through";
};

li.appendChild(span);
li.appendChild(btn);

document.getElementById("taskList").appendChild(li);

input.value = "";

}


// Background Change
function changeBackground(){
document.body.style.background =
"linear-gradient(135deg, lightgreen, beige)";
}