let currentStage = 0;

function stage(){

    let parts =
    document.querySelectorAll(".decoupler");

    if(parts.length > currentStage){

        parts[currentStage].style.background =
        "red";

        currentStage++;
    }

}
