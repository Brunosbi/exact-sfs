let achievements = [];

function unlockAchievement(name){

    if(
        achievements.includes(name)
    ){
        return;
    }

    achievements.push(name);

    let list =
    document.getElementById(
        "achievementList"
    );

    let item =
    document.createElement("div");

    item.innerHTML = "🏆 " + name;

    list.appendChild(item);

    alert(
        "Achievement Unlocked: " +
        name
    );
}

function firstLaunch(){
    unlockAchievement(
        "First Launch"
    );
}

function reachOrbit(){
    unlockAchievement(
        "Reach Orbit"
    );
}

function moonLanding(){
    unlockAchievement(
        "Moon Landing"
    );
}

function marsLanding(){
    unlockAchievement(
        "Mars Landing"
    );
}

function spaceStation(){
    unlockAchievement(
        "Space Station Builder"
    );
}