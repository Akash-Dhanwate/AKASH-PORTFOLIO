// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((section, index) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      setTimeout(() => {
        section.classList.add("active");
      }, index * 150);
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Skill progress animation
const progressBars = document.querySelectorAll(".progress-bar");

function animateSkills() {
  progressBars.forEach((bar) => {
    const value = bar.getAttribute("data-progress");
    bar.style.width = value + "%";
  });
}

window.addEventListener("scroll", animateSkills);

// Contact form (client-side validation)
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: name.value.trim(),
    email: email.value.trim(),
    message: message.value.trim(),
  };

  if (!data.name || !data.email || !data.message) {
    status.textContent = "All fields are required.";
    return;
  }

  const res = await fetch("/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  status.textContent = result.message;
  form.reset();
});





document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor-glow");
  const hero = document.querySelector("#hero");

  // SAFETY CHECK (important)
  if (!cursor || !hero) {
    console.error("Cursor or hero element not found");
    return;
  }

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    currentX += (mouseX - currentX) * 0.09;
    currentY += (mouseY - currentY) * 0.09;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  hero.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
  });

  hero.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });
});