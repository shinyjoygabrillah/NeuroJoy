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

document.getElementById("tracker")
.scrollIntoView({
behavior:"smooth"
});
}

let progress =
localStorage.getItem("progress") || 0;

progress = Number(progress);

updateProgress();

function updateProgress(){

document.getElementById("progressCount")
.textContent = progress;

document.getElementById("progressFill")
.style.width = progress + "%";

localStorage.setItem(
"progress",
progress
);
}

function increaseProgress(){

if(progress < 100){

progress += 10;

updateProgress();
}
}

function decreaseProgress(){

if(progress > 0){

progress -= 10;

updateProgress();
}
}

function resetProgress(){

progress = 0;

updateProgress();
}

function addGoal(){

const input =
document.getElementById("goalInput");

if(input.value.trim()==="") return;

const li =
document.createElement("li");

li.textContent = "✅ " + input.value;

document.getElementById("goalList")
.appendChild(li);

input.value="";
}