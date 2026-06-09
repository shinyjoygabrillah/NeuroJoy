particlesJS("particles-js", {

  particles: {

    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },

    color: {
      value: ["#b14cff", "#47c7ff", "#ffffff"]
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.6,
      random: true
    },

    size: {
      value: 3,
      random: true
    },

    line_linked: {
      enable: true,
      distance: 200,
      color: "#7c5cff",
      opacity: 0.3,
      width: 1
    },

    move: {
      enable: true,
      speed: 0.7,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
      
    }

  },

  interactivity: {

    detect_on: "canvas",

    events: {

      onhover: {
        enable: true,
        mode: "grab"
      },

      onclick: {
        enable: true,
        mode: "push"
      },

      resize: true

    },

    modes: {

      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.3
        }
      },

      push: {
        particles_nb: 5
      }

    }

  },

  retina_detect: true

});

gsap.from("nav",{
  y:-80,
  opacity:0,
  duration:1.2,
  ease:"power4.out"
});

gsap.from(".hero-text h1",{
  x:-100,
  opacity:0,
  duration:1,
  delay:0.3,
  ease:"power4.out"
});

gsap.from(".hero-text p",{
  x:-80,
  opacity:0,
  duration:1,
  delay:0.6,
  ease:"power4.out"
});

gsap.from(".buttons button",{
  y:60,
  opacity:0,
  stagger:0.2,
  duration:1,
  delay:0.8,
  ease:"back.out(1.7)"
});

gsap.from(".rating",{
  y:40,
  opacity:0,
  duration:1,
  delay:1,
  ease:"power4.out"
});

gsap.from(".card",{
  y:80,
  opacity:0,
  stagger:0.15,
  duration:1.2,
  delay:1.2,
  ease:"power4.out"
});

gsap.from(".brain",{
  scale:0.5,
  opacity:0,
  duration:1.8,
  ease:"elastic.out(1,0.5)"
});

gsap.from(".sidebar",{
  x:120,
  opacity:0,
  duration:1.4,
  ease:"power4.out"
});

const toggle = document.querySelector(".switch");

toggle.addEventListener("click",()=>{

  toggle.classList.toggle("active");

});