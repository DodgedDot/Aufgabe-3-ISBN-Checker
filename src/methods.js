
function checkISBN(checkSum) {
    console.log("checking...")
    checkSum = 5
    
    let tenthSpot = inputFieldISBN.value.split('')
    if(tenthSpot[9] === checkSum.toString()){
        userFeedback.textContent = "ISBN is valid"
        userFeedback.style.color = "green"
    } else{
        userFeedback.textContent = "ISBN is invalid"
        userFeedback.style.color = "red"
    }
    
}

function calculateISBNChecksum (inputString){
    return inputString.split('')
}
module.exports = {
     checkISBN, calculateISBNChecksum
}