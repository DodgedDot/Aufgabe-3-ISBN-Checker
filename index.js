const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`document.getElementById('checkButton').addEventListener("click", checkISBN)
`)

function checkISBN(checkSum) {
    console.log("checking...")
    checkSum = 5
    inputFieldISBN = document.getElementById('inputFieldISBN')
    userFeedback = document.getElementById('userFeedback')
    let tenthSpot = inputFieldISBN.value.split("")
    if(tenthSpot[9] === checkSum.toString()){
        userFeedback.textContent = "ISBN is valid"
        userFeedback.style.color = "green"
    } else{
        userFeedback.textContent = "ISBN is invalid"
        userFeedback.style.color = "red"
    }
    
}

function calculateISBNChecksum (inputString){
    return inputString
}
module.exports = {
    calculateISBNChecksum
}