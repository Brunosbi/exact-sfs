let warp = 1;

function setWarp(value){

    warp = value;

    document.getElementById("warpDisplay")
    .innerHTML = "Time Warp ×" + value;
}

function getWarp(){

    return warp;
}
