(()=>{var e={573:e=>{e.exports={checkISBN:function(e){var t=inputFieldISBN.value.split("");console.log(t[9]),e===t[9]?(userFeedback.textContent="ISBN is valid",userFeedback.style.color="green"):(userFeedback.textContent="ISBN is invalid",userFeedback.style.color="red")},calculateISBNChecksum:function(e){inputArray=e.split("");var t=[],n=0,r="";for(let e=0;e<9;e++)t[e]=parseInt(inputArray[e])*(e+1),n+=t[e];return r=n%11,console.log("test-1"),r.toString()}}}},t={};function n(r){var c=t[r];if(void 0!==c)return c.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{const{checkISBN:e,calculateISBNChecksum:t}=n(573);document.getElementById("checkButton").addEventListener("click",e(t(inputFieldISBN.value))),inputFieldISBN=document.getElementById("inputFieldISBN"),userFeedback=document.getElementById("userFeedback")})()})();