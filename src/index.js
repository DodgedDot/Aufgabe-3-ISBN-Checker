const {comparingChecksums} = require('./methods.js')

const inputFieldISBN = document.getElementById('inputFieldISBN')
const userFeedback = document.getElementById('userFeedback')
document.getElementById('checkButton').addEventListener("click", checkingUserInput)
document.getElementById('inputFieldISBN').addEventListener("focus", () => {
    userFeedback.textContent = ""
});

function checkingUserInput (){
    comparingChecksums(inputFieldISBN.value)
}
