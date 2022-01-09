const bday = document.querySelector("#bday-input")
const luckyNumber = document.querySelector("#lucky-nummber")
const checkButton = document.querySelector("#check-button")
const result = document.querySelector("#result")

const displayResult = resultToBeDisplayed => {
    result.style.display = "block";
    result.innerText = resultToBeDisplayed;
}

// function displayResult (resultToBeDisplayed) {
//     result.style.display = "block";
//     result.innerText = resultToBeDisplayed;
// }

const sumOfDOB = bday => {
    let bdaynew = bday.value;
    bdaynew = bdaynew.replace(/-/g, "");

    let sum = 0;
    for(i=0; i<bdaynew.length; i++) {
         sum = sum + Number(bdaynew.charAt(i));
    }
    return sum;
}

// function sumOfDOB(bday) {
//     let bdaynew = bday.value;
//     bdaynew = bdaynew.replace(/-/g, "");

//     // console.log(bdaynew)

//     let sum = 0;

//     for(i=0; i<bdaynew.length; i++) {
//          sum = sum + Number(bdaynew.charAt(i));
//     }

//     // console.log(sum);
//     return sum;
// }

const luckChecker = (sumUsed, luckyNumber) => {
    if (sumUsed % luckyNumber.value === 0) {
        displayResult("Your Birthday is LUCKY !!");   
    } 
    else {
        displayResult("Your Birthday is not lucky :(");    
    }
}

// function luckChecker(sumUsed, luckyNumber) {
    
//     if (sumUsed % luckyNumber.value === 0) {
//         displayResult("Your Birthday is LUCKY !!");   
//     } 
//     else {
//         displayResult("Your Birthday is not lucky :(");    
//     }
// }

checkButton.addEventListener("click", () => {
    result.style.display = "none";
    let sumUsed = sumOfDOB(bday);

    if (sumUsed == "" || luckyNumber.value == "") {
        displayResult("Enter both values");
    } else {
        luckChecker(sumUsed, luckyNumber)
    } 
})