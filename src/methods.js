
function checkISBN(checkSum) {
    var inputArray = inputFieldISBN.value.split('')
    if(checkSum === inputArray[9] || (checkSum === '10') && (inputArray[9] === 'X')){
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
    return result.toString()
}

function comparingChecksums() {
    return checkISBN(calculateISBNChecksum(inputFieldISBN.value))
}
module.exports = {
     calculateISBNChecksum, comparingChecksums
}