// ====== Daily Challenge 1 : Planets
const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];

const section = document.querySelector(".listPlanets");

planets.forEach((planet) => {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet", planet.toLowerCase());
    planetDiv.textContent = planet;

    // Create moons
    for (let i = 0; i < planet.moons; i++) {
        const moon = document.createElement("div");
        moon.classList.add("moon");

        // random position around the planet
        moon.style.top = `${Math.random() * 80}px`;
        moon.style.left = `${Math.random() * 80}px`;

        planetDiv.appendChild(moon);
    }

    section.appendChild(planetDiv);
});


// ====== Daily Challenge 2

// ====== Daily Challenge 3
