const {comparingChecksums} = require('./methods.js')

inputFieldISBN = document.getElementById('inputFieldISBN');
userFeedback = document.getElementById('userFeedback');
document.getElementById('checkButton').addEventListener("click", comparingChecksums)
