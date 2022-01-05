const {checkISBN, calculateISBNChecksum} = require('./methods.js')

document.getElementById('checkButton').addEventListener("click", checkISBN)
inputFieldISBN = document.getElementById('inputFieldISBN')
userFeedback = document.getElementById('userFeedback')
