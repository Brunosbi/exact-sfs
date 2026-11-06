```javascript
let launched = false;
let flight = null;

function launch() {

    if (launched) {
        return;
    }

    let rocket = document.getElementById("builder");

    let parts = rocket.querySelectorAll(".part");

    if (parts.length === 0) {
        alert("Build your rocket first!");
        return;
    }

    if (fuel <= 0) {
        alert("No fuel remaining!");
        return;
    }

    launched = true;

    // Start fuel consumption
    startFuelBurn();

    // Start orbit calculations
    startOrbit();

    // Create engine fire
    let fire = document.createElement("div");

    fire.className = "fire";

    rocket.appendChild(fire);

    // Rocket launch animation
    let currentTop = rocket.getBoundingClientRect().top;

    flight = setInterval(function () {

        if (fuel <= 0) {

            clearInterval(flight);
            flight = null;

            if (fire) {
                fire.remove();
            }

            return;
        }

        currentTop -= 2 * getWarp();

        rocket.style.top = currentTop + "px";

        // Stop when rocket leaves the screen
        if (currentTop < -500) {

            clearInterval(flight);
            flight = null;

            if (fire) {
                fire.remove();
            }

        }

    }, 20);

    // Unlock first launch achievement
    if (typeof firstLaunch === "function") {
        firstLaunch();
    }

}

// Reset rocket launch state
function resetLaunch() {

    if (flight) {
        clearInterval(flight);
        flight = null;
    }

    let rocket = document.getElementById("builder");

    let fire = rocket.querySelector(".fire");

    if (fire) {
        fire.remove();
    }

    rocket.style.top = "120px";

    launched = false;
}
```