const stars = document.getElementById("stars");

for(let i = 0; i < 180; i++){

  const star = document.createElement("div");
  star.className = "star";

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  star.style.animationDuration =
    (Math.random() * 5 + 2) + "s";

  stars.appendChild(star);
}

function scrollToSection(){

  document.getElementById("diversity")
    .scrollIntoView({
      behavior:"smooth"
    });
}

const network =
  document.getElementById("brainNetwork");

const nodes = [];

for(let i=0;i<18;i++){

  const node = document.createElement("div");
  node.className = "node";

  const x = Math.random()*90;
  const y = Math.random()*80;

  node.style.left = x + "%";
  node.style.top = y + "%";

  network.appendChild(node);

  nodes.push({x,y});
}

for(let i=0;i<nodes.length-1;i++){

  const a = nodes[i];
  const b = nodes[i+1];

  const line =
    document.createElement("div");

  line.className = "connection";

  const dx = b.x - a.x;
  const dy = b.y - a.y;

  const len =
    Math.sqrt(dx*dx + dy*dy);

  const angle =
    Math.atan2(dy,dx) *
    180 / Math.PI;

  line.style.width = len + "%";
  line.style.left = a.x + "%";
  line.style.top = a.y + "%";

  line.style.transform =
    `rotate(${angle}deg)`;

  network.appendChild(line);
}