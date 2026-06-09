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

document.getElementById("preferences")
.scrollIntoView({
behavior:"smooth"
});
}

function saveSettings(){

const name =
document.getElementById("username").value;

const theme =
document.getElementById("themeSelect").value;

localStorage.setItem("userName", name);
localStorage.setItem("theme", theme);

document.getElementById("displayName")
.textContent = name || "No name saved yet";

document.getElementById("displayTheme")
.textContent = "Theme: " + theme;

document.getElementById("savedMessage")
.textContent =
"Settings saved successfully ✨";

applyTheme(theme);
}

function applyTheme(theme){

document.body.classList.remove(
"purple",
"blue",
"green"
);

if(theme !== "default"){

document.body.classList.add(theme);
}
}

const savedName =
localStorage.getItem("userName");

const savedTheme =
localStorage.getItem("theme");

if(savedName){

document.getElementById("displayName")
.textContent = savedName;

document.getElementById("username").value =
savedName;
}

if(savedTheme){

document.getElementById("displayTheme")
.textContent =
"Theme: " + savedTheme;

document.getElementById("themeSelect").value =
savedTheme;

applyTheme(savedTheme);
}