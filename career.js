let money = 10000;

function updateMoney(){

    document.getElementById(
        "money"
    ).innerHTML = money;
}

function completeContract(amount){

    money += amount;

    updateMoney();

    alert(
        "Contract Complete! +$" +
        amount
    );
}

function earthContract(){
    completeContract(1000);
}

function moonContract(){
    completeContract(5000);
}

function marsContract(){
    completeContract(20000);
}

window.onload = function(){

    updateMoney();

};