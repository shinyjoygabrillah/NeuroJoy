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

document.getElementById("write")
.scrollIntoView({
behavior:"smooth"
});
}

function saveEntry(){

const text =
document.getElementById("journalInput").value;

localStorage.setItem("journal", text);

document.getElementById("saveMsg")
.textContent="Entry saved successfully ✨";

document.getElementById("entryText")
.textContent=text || "No entry yet.";
}

function clearEntry(){

document.getElementById("journalInput").value="";

localStorage.removeItem("journal");

document.getElementById("entryText")
.textContent="No entry yet.";

document.getElementById("saveMsg")
.textContent="Cleared 🫧";
}

const saved =
localStorage.getItem("journal");

if(saved){

document.getElementById("entryText")
.textContent=saved;

document.getElementById("journalInput").value=saved;
}