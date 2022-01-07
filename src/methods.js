
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
    inputArray = inputString.split('')
    var output = []
    var sum = 0
    for(let i = 0; i < 9; i++){
        output[i] = parseInt(inputArray[i]) * (i + 1)
        sum += output[i]
    }
    return sum
}
module.exports = {
     checkISBN, calculateISBNChecksum
}