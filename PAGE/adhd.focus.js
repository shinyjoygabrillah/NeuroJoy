const starsContainer = document.getElementById('stars');

for(let i = 0; i < 180; i++){

  const star = document.createElement('div');

  star.classList.add('star');

  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';

  star.style.animationDuration =
  (Math.random() * 5 + 2) + 's';

  starsContainer.appendChild(star);
}

function scrollToSection(){

  document.getElementById('attention')
  .scrollIntoView({
    behavior:'smooth'
  });
}

const network =
document.getElementById('brainNetwork');

const nodes = [];

for(let i = 0; i < 18; i++){

  const node =
  document.createElement('div');

  node.classList.add('node');

  const x = Math.random() * 90;
  const y = Math.random() * 80;

  node.style.left = x + '%';
  node.style.top = y + '%';

  network.appendChild(node);

  nodes.push({x,y});
}

for(let i = 0; i < nodes.length - 1; i++){

  const node1 = nodes[i];
  const node2 = nodes[i + 1];

  const line =
  document.createElement('div');

  line.classList.add('connection');

  const dx = node2.x - node1.x;
  const dy = node2.y - node1.y;

  const length =
  Math.sqrt(dx * dx + dy * dy);

  const angle =
  Math.atan2(dy, dx) * 180 / Math.PI;

  line.style.width = length + '%';

  line.style.left = node1.x + '%';
  line.style.top = node1.y + '%';

  line.style.transform =
  `rotate(${angle}deg)`;

  network.appendChild(line);
}

const observer =
new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.style.opacity='1';

      entry.target.style.transform=
      'translateY(0px)';
    }
  });

},{
  threshold:0.1
});

document.querySelectorAll('.card')
.forEach(card=>{

  card.style.opacity='0';

  card.style.transform=
  'translateY(40px)';

  card.style.transition='0.8s ease';

  observer.observe(card);
});