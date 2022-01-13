
function checkISBN(checkSum, userInput) {
    var inputArray = userInput.value.split('')
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

    if(inputArray.length === 10){
        inputArray.pop() //removes checknumber
        inputArray.forEach((item, index) => {
            output[index] = parseInt(item * (index + 1))
            sum += output[index]
        });
    }
    result = sum % 11
    return result.toString()
}

function comparingChecksums(userInput) {
    return checkISBN(calculateISBNChecksum(userInput), userInput)
}
module.exports = {
     calculateISBNChecksum, comparingChecksums
}