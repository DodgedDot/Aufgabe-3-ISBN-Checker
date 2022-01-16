const {comparingChecksums} = require('./methods.js')

const inputFieldISBN = document.getElementById('inputFieldISBN')
const userFeedback = document.getElementById('userFeedback')
document.getElementById('checkButton').addEventListener("click", checkingUserInput)
document.getElementById('inputFieldISBN').addEventListener("focus", () => {
    userFeedback.textContent = ""
});

function checkingUserInput (){
    var feedbackParams = comparingChecksums(inputFieldISBN.value)
    var {feedbackText, feedbackColor} = feedbackParams
    userFeedback.textContent = feedbackText
    userFeedback.style.color = feedbackColor
}
