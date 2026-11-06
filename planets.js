let currentPlanet = "Earth";

function goEarth(){

    currentPlanet = "Earth";

    document.body.style.background =
    "linear-gradient(to bottom,#4da6ff,#87ceeb,#bdefff)";

    document.getElementById("planetName")
    .innerHTML = "Earth";
}

function goMoon(){

    currentPlanet = "Moon";

    document.body.style.background =
    "linear-gradient(to bottom,#000000,#111111)";

    document.getElementById("planetName")
    .innerHTML = "Moon";
}

function goMars(){

    currentPlanet = "Mars";

    document.body.style.background =
    "linear-gradient(to bottom,#a33a2b,#d2691e)";

    document.getElementById("planetName")
    .innerHTML = "Mars";
}