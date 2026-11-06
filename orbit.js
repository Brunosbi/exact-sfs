```javascript
let altitude = 0;
let velocity = 0;
let apoapsis = 0;
let periapsis = 0;

let orbitActive = false;
let orbitInterval = null;

function startOrbit() {

    if (orbitActive) return;

    orbitActive = true;

    orbitInterval = setInterval(function () {

        if (typeof fuel !== "undefined" && fuel <= 0) {
            return;
        }

        velocity += 10 * getWarp();

        altitude += velocity * getWarp();

        apoapsis = altitude + (velocity * 50);

        periapsis = Math.max(
            0,
            altitude - (velocity * 20)
        );

        document.getElementById("velocity").innerHTML =
            Math.floor(velocity) + " m/s";

        document.getElementById("altitude").innerHTML =
            Math.floor(altitude) + " m";

        document.getElementById("apoapsis").innerHTML =
            Math.floor(apoapsis) + " m";

        document.getElementById("periapsis").innerHTML =
            Math.floor(periapsis) + " m";

        updateOrbitLine();

    }, 100);

}

function updateOrbitLine() {

    let orbitLine = document.getElementById("orbitLine");

    if (!orbitLine) return;

    let size = Math.min(
        400,
        50 + altitude / 1000
    );

    orbitLine.style.width = size + "px";
    orbitLine.style.height = size + "px";

}

function circularize() {

    if (!orbitActive) {
        alert("Launch your rocket first!");
        return;
    }

    periapsis = apoapsis;

    updateOrbitLine();

    alert("Orbit Circularized!");

    if (typeof reachOrbit === "function") {
        reachOrbit();
    }

}

function deorbit() {

    if (!orbitActive) {
        alert("You are not in orbit!");
        return;
    }

    orbitActive = false;

    if (orbitInterval) {
        clearInterval(orbitInterval);
        orbitInterval = null;
    }

    velocity = 0;
    apoapsis = 0;
    periapsis = 0;

    updateOrbitLine();

    alert("Deorbit Started!");

}

function resetOrbit() {

    if (orbitInterval) {
        clearInterval(orbitInterval);
        orbitInterval = null;
    }

    orbitActive = false;

    altitude = 0;
    velocity = 0;
    apoapsis = 0;
    periapsis = 0;

    document.getElementById("velocity").innerHTML = "0 m/s";
    document.getElementById("altitude").innerHTML = "0 m";
    document.getElementById("apoapsis").innerHTML = "0 m";
    document.getElementById("periapsis").innerHTML = "0 m";

    updateOrbitLine();

}
```