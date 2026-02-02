// Initialize Animations
AOS.init({
    duration: 1000,
    once: true,
});

// Particle Settings
tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
        number: { value: 100, density: { enable: true, area: 800 } },
        color: { value: "#3e38f8" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
        links: {
            enable: true,
            distance: 150,
            color: "#0084ff",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" }
        }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" }
        },
        modes: {
            grab: { distance: 200, links: { opacity: 0.5 } }
        }
    },
    detectRetina: true
});