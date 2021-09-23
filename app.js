var bday = document.querySelector("#bday-input")
var luckyNumber = document.querySelector("#lucky-nummber")
var checkButton = document.querySelector("#check-button")
var result = document.querySelector("#result")

function displayResult (resultToBeDisplayed) {
    result.style.display = "block";
    result.innerText = resultToBeDisplayed;
}

function sumOfDOB(bday) {
    let bdaynew = bday.value;
    bdaynew = bdaynew.replace(/-/g, "");

    // console.log(bdaynew)

    let sum = 0;

    for(i=0; i<bdaynew.length; i++) {
         sum = sum + Number(bdaynew.charAt(i));
    }

    // console.log(sum);
    return sum;
}

function luckChecker(sumUsed, luckyNumber) {
    
    if (sumUsed % luckyNumber.value === 0) {
        displayResult("Your Birthday is LUCKY !!");   
    } 
    else {
        displayResult("Your Birthday is not lucky :(");    
    }
}

checkButton.addEventListener("click", function clcikHandler() {
    result.style.display = "none";
    var sumUsed = sumOfDOB(bday);

    if (sumUsed == "" || luckyNumber == "") {
        displayResult("Enter both values");
    } else {
        luckChecker(sumUsed, luckyNumber)
    } 
})