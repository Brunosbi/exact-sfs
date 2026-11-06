let science = 0;

function addScience(amount){

    science += amount;

    document.getElementById(
        "science"
    ).innerHTML = science;
}

function moonMission(){

    addScience(100);

    alert(
        "Moon Mission Complete! +100 Science"
    );
}

function marsMission(){

    addScience(500);

    alert(
        "Mars Mission Complete! +500 Science"
    );
}

function probeMission(){

    addScience(50);

    alert(
        "Probe Mission Complete! +50 Science"
    );
}