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

document.getElementById("timer")
.scrollIntoView({
behavior:"smooth"
});
}

let time = 25 * 60;
let timer;
let running = false;

const display =
document.getElementById("timer");

function updateDisplay(){

const minutes =
Math.floor(time/60);

const seconds =
time%60;

display.textContent =
`${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function startTimer(){

if(running) return;

running=true;

timer=setInterval(()=>{

if(time>0){

time--;
updateDisplay();

}else{

clearInterval(timer);

running=false;

document.getElementById("status")
.textContent="Break Time!";
}

},1000);
}

function pauseTimer(){

clearInterval(timer);

running=false;
}

function resetTimer(){

clearInterval(timer);

running=false;

time=25*60;

updateDisplay();

document.getElementById("status")
.textContent="Focus Session";
}

updateDisplay();