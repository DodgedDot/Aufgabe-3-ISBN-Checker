
function checkISBN(checkSum) {
    var inputArray = inputFieldISBN.value.split('')
    console.log(inputArray[9])
    if(checkSum === inputArray[9]){
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
    var result = ""
    for(let i = 0; i < 9; i++){
        output[i] = parseInt(inputArray[i]) * (i + 1)
        sum += output[i]
    }
    result = sum % 11
    console.log("test-1")
    return result.toString()
}
module.exports = {
     checkISBN, calculateISBNChecksum
}