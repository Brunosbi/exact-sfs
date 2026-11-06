let fuel = 100;

function startFuelBurn(){

    let fuelBurn =
    setInterval(function(){

        if(fuel <= 0){

            fuel = 0;

            document.getElementById(
                "fuel"
            ).innerHTML = "0%";

            alert("Out of fuel!");

            clearInterval(fuelBurn);

            return;
        }

        fuel--;

        document.getElementById(
            "fuel"
        ).innerHTML =
        fuel + "%";

        if(fuel < 20){

            document.getElementById(
                "fuel"
            ).style.color = "red";
        }

    },1000);

}
