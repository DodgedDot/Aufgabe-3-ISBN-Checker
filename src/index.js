const {comparingChecksums} = require('./methods.js')

const inputFieldISBN = document.getElementById('inputFieldISBN')
const userFeedback = document.getElementById('userFeedback')
document.getElementById('checkButton').addEventListener("click", checkingUserInput)
document.getElementById('inputFieldISBN').addEventListener("focus", () => {
    userFeedback.textContent = ""
});

function checkingUserInput (){
    feedbackParams = comparingChecksums(inputFieldISBN.value)
    const {feedbackText, feedbackColor} = feedbackParams
    userFeedback.textContent = feedbackText
    userFeedback.style.color = feedbackColor
    console.log(feedbackText)
    console.log(feedbackColor)
}
