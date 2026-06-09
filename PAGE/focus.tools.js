const stars = document.getElementById("stars");

for(let i=0;i<200;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";

star.style.animationDuration=
(Math.random()*5+2)+"s";

stars.appendChild(star);
}

function scrollToSection(){

document.getElementById("tools")
.scrollIntoView({
behavior:"smooth"
});
}

let focusCount =
localStorage.getItem("focusCount") || 0;

document.getElementById("focusCount")
.textContent = focusCount;

function increaseFocus(){

focusCount++;

localStorage.setItem(
"focusCount",
focusCount
);

document.getElementById("focusCount")
.textContent = focusCount;
}

function addTask(){

const input =
document.getElementById("taskInput");

if(input.value.trim()==="") return;

const li =
document.createElement("li");

li.textContent = input.value;

document.getElementById("taskList")
.appendChild(li);

input.value="";
}

function waterReminder(){

document.getElementById("waterText")
.textContent =
"💧 Time to drink water and refresh your brain!";
}