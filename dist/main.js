(()=>{var e={573:e=>{function t(e){inputArray=e.split("");var t=[],n=0;for(let e=0;e<9;e++)t[e]=parseInt(inputArray[e])*(e+1),n+=t[e];return(n%11).toString()}e.exports={calculateISBNChecksum:t,comparingChecksums:function(){return function(e){var t=inputFieldISBN.value.split("");e===t[9]||"10"===e&&"X"===t[9]?(userFeedback.textContent="ISBN is valid",userFeedback.style.color="green"):(userFeedback.textContent="ISBN is invalid",userFeedback.style.color="red")}(t(inputFieldISBN.value))}}}},t={};function n(r){var u=t[r];if(void 0!==u)return u.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{const{comparingChecksums:e}=n(573);inputFieldISBN=document.getElementById("inputFieldISBN"),userFeedback=document.getElementById("userFeedback"),document.getElementById("checkButton").addEventListener("click",e)})()})();