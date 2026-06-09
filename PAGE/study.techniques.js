const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {
  const s = document.createElement("div");
  s.className = "star";
  s.style.left = Math.random() * 100 + "%";
  s.style.top = Math.random() * 100 + "%";
  s.style.animationDuration = (Math.random() * 5 + 2) + "s";
  stars.appendChild(s);
}

function scrollToSection() {
  document.getElementById("learning").scrollIntoView({ behavior: "smooth" });
}

const net = document.getElementById("brainNetwork");
const nodes = [];

for (let i = 0; i < 18; i++) {
  const n = document.createElement("div");
  n.className = "node";

  const x = Math.random() * 90;
  const y = Math.random() * 80;

  n.style.left = x + "%";
  n.style.top = y + "%";

  net.appendChild(n);
  nodes.push({ x, y });
}

for (let i = 0; i < nodes.length - 1; i++) {
  const a = nodes[i];
  const b = nodes[i + 1];

  const line = document.createElement("div");
  line.className = "connection";

  const dx = b.x - a.x;
  const dy = b.y - a.y;

  const len = Math.sqrt(dx * dx + dy * dy);
  const ang = Math.atan2(dy, dx) * 180 / Math.PI;

  line.style.width = len + "%";
  line.style.left = a.x + "%";
  line.style.top = a.y + "%";
  line.style.transform = `rotate(${ang}deg)`;

  net.appendChild(line);
}