const {checkISBN, calculateISBNChecksum} = require('./index.js')

document.getElementById('checkButton').addEventListener("click", checkISBN)
inputFieldISBN = document.getElementById('inputFieldISBN')
userFeedback = document.getElementById('userFeedback')
