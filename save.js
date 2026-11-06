function saveRocket(){

    let rocket =
    document.getElementById("builder")
    .innerHTML;

    localStorage.setItem(
        "savedRocket",
        rocket
    );

    alert("Rocket Saved!");
}

function loadRocket(){

    let rocket =
    localStorage.getItem(
        "savedRocket"
    );

    if(rocket){

        document.getElementById(
            "builder"
        ).innerHTML = rocket;

        alert("Rocket Loaded!");

    }else{

        alert(
            "No Saved Rocket Found!"
        );
    }
}

function clearRocket(){

    if(confirm(
        "Delete current rocket?"
    )){

        document.getElementById(
            "builder"
        ).innerHTML = "";
    }
}

function autoSave(){

    let rocket =
    document.getElementById("builder")
    .innerHTML;

    localStorage.setItem(
        "autosaveRocket",
        rocket
    );
}

function loadAutoSave(){

    let rocket =
    localStorage.getItem(
        "autosaveRocket"
    );

    if(rocket){

        document.getElementById(
            "builder"
        ).innerHTML = rocket;
    }
}

setInterval(
    autoSave,
    5000
);

window.onload =
function(){

    loadAutoSave();

};