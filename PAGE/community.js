// =========================
//      community.js
// =========================


// PARTICLES

particlesJS("particles-js", {

  particles: {

    number: {
      value: 90
    },

    color: {
      value: ["#b14cff","#47c7ff","#ffffff"]
    },

    shape: {
      type:"circle"
    },

    opacity: {
      value:0.5,
      random:true
    },

    size: {
      value:3,
      random:true
    },

    line_linked: {
      enable:true,
      distance:140,
      color:"#7b61ff",
      opacity:0.25,
      width:1
    },

    move: {
      enable:true,
      speed:2,
      direction:"none",
      random:true
    }

  },

  interactivity: {

    events: {

      onhover: {
        enable:true,
        mode:"grab"
      }

    },

    modes: {

      grab: {
        distance:180,
        line_linked:{
          opacity:1
        }
      }

    }

  },

  retina_detect:true

});


// GSAP

gsap.from(".sidebar",{
  x:-100,
  opacity:0,
  duration:1.2,
  ease:"power4.out"
});

gsap.from(".top-bar",{
  y:-50,
  opacity:0,
  duration:1,
  delay:0.2
});

gsap.from(".hero-card",{
  y:80,
  opacity:0,
  duration:1.2,
  delay:0.4,
  ease:"power4.out"
});

gsap.from(".post-card",{
  y:60,
  opacity:0,
  stagger:0.15,
  duration:1,
  delay:0.7,
  ease:"power4.out"
});