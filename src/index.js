const {checkISBN, calculateISBNChecksum} = require('./methods.js')

inputFieldISBN = document.getElementById('inputFieldISBN');
userFeedback = document.getElementById('userFeedback');
document.getElementById('checkButton').addEventListener("click", checkISBN(calculateISBNChecksum(inputFieldISBN.value)))
