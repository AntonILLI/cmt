export default {
  particles: {
    number: {
<<<<<<< HEAD
      value: 300,
      density: {
        enable: true,
        value_area: 1000
=======
      value: 160,
      density: {
        enable: true,
        value_area: 800
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
<<<<<<< HEAD
        nb_sides: 5
=======
        nb_sides: 4
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
<<<<<<< HEAD
        sync: true
=======
        sync: false
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
      }
    },
    size: {
      value: 11.83721462448409,
      random: true,
      anim: {
        enable: false,
        speed: 4,
<<<<<<< HEAD
        size_min: 0.5,
=======
        size_min: 0.3,
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
