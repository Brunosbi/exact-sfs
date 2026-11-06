let unlocked = {
    capsule: true,
    tank: true,
    smallengine: true,

    probe: false,
    bigengine: false,
    fairing: false,
    booster: false,
    panel: false,
    decoupler: false,
    docking: false
};

function unlockPart(part,cost){

    if(science < cost){

        alert("Not enough Science!");

        return;
    }

    science -= cost;

    document.getElementById(
        "science"
    ).innerHTML = science;

    unlocked[part] = true;

    alert(
        part + " unlocked!"
    );
}

function isUnlocked(part){

    return unlocked[part];
}

function showUnlocked(){

    console.log(unlocked);

}