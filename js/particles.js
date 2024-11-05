const particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: "#0984e3"
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 3
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#0984e3",
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
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
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5
        }
      }
    }
  }
};

particlesJS("particles-js", particlesConfig);
