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

function saveMood(mood){

localStorage.setItem("currentMood", mood);

document.getElementById("currentMood")
.textContent = mood;
}

const savedMood =
localStorage.getItem("currentMood");

if(savedMood){

document.getElementById("currentMood")
.textContent = savedMood;
}

function saveJournal(){

const text =
document.getElementById("journal").value;

localStorage.setItem(
"journalEntry",
text
);

document.getElementById("saveMessage")
.textContent =
"Reflection saved successfully!";
}

const savedJournal =
localStorage.getItem("journalEntry");

if(savedJournal){

document.getElementById("journal").value =
savedJournal;
}