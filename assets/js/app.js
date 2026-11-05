/*
 * Browser interactions for the legacy personal portfolio.
 * Handles the responsive navigation and the decorative particle field without
 * changing the markup contract used by the existing HTML pages.
 */

const particles = document.getElementById("particles");
const particleBorders = ["50%", "0%"];
const particleColors = ["#FF6B6B", "#FFE66D", "#4472CA"];

/** Toggles the responsive class expected by the existing navigation markup. */
function myFunction() {
  const navigation = document.getElementById("myTopnav");
  if (!navigation) {
    return;
  }

  navigation.className =
    navigation.className === "topnav" ? "topnav responsive" : "topnav";
}

/** Creates one short-lived decorative particle at the user's click position. */
function createParticle(event) {
  if (!particles) {
    return;
  }

  const colorIndex = Math.floor(Math.random() * particleColors.length);
  const particle = document.createElement("div");

  particle.style.position = "absolute";
  particle.style.marginLeft = `${event.clientX}px`;
  particle.style.marginTop = `${event.clientY}px`;
  particle.style.width = "10px";
  particle.style.borderTop = "5px solid transparent";
  particle.style.borderRight = "5px solid transparent";
  particle.style.borderLeft = "5px solid transparent";
  particle.style.borderBottom = `10px solid ${particleColors[colorIndex]}`;
  particle.style.animation = "move 5s ease-in infinite";
  particles.appendChild(particle);

  /** Removes the temporary click particle after its animation finishes. */
  function removeCreatedParticle() {
    particle.remove();
  }

  window.setTimeout(removeCreatedParticle, 5000);
}

/** Rebuilds the decorative background particles for the current viewport size. */
function getParticles() {
  if (!particles) {
    return;
  }

  const particleCount = document.documentElement.clientWidth / 40;
  particles.innerHTML = "";

  for (let index = 0; index < particleCount; index += 1) {
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    const x = Math.floor(Math.random() * viewportWidth) + 1;
    const y = Math.floor(Math.random() * viewportHeight) + 1;
    const size = Math.floor(Math.random() * 8) + 5;
    const opacity = Math.floor(Math.random() * 4) + 1;
    const duration = Math.floor(Math.random() * 12) + 8;
    const borderIndex = Math.floor(Math.random() * particleBorders.length);
    const colorIndex = Math.floor(Math.random() * particleColors.length);

    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.marginLeft = `${x}px`;
    particle.style.marginTop = `${y}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.opacity = opacity;
    particle.style.backgroundColor = particleColors[colorIndex];
    particle.style.borderRadius = particleBorders[borderIndex];
    particle.style.animation = `move ${duration}s ease-in infinite`;
    particles.appendChild(particle);
  }
}

/** Refreshes the particle field and ensures the click interaction is bound once. */
function initializeParticleField() {
  if (!particles) {
    return;
  }

  getParticles();
  particles.removeEventListener("click", createParticle);
  particles.addEventListener("click", createParticle);
}

window.addEventListener("resize", getParticles);
window.addEventListener("load", initializeParticleField);
