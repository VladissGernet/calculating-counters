const elecConst=5.04;document.getElementById("elec").textContent=5.04.toString();const gasConst=6.42;document.getElementById("gas").textContent=6.42.toString();const waterConst=41.17;document.getElementById("water").textContent=41.17.toString();let elecInputBefore=document.getElementById("calc-elec-before"),elecInputAfter=document.getElementById("calc-elec-after"),gasInputBefore=document.getElementById("calc-gas-before"),gasInputAfter=document.getElementById("calc-gas-after"),waterInputBefore=document.getElementById("calc-water-before"),waterInputAfter=document.getElementById("calc-water-after"),elecResult=document.getElementById("calc-elec-result"),gasResult=document.getElementById("calc-gas-result"),waterResult=document.getElementById("calc-water-result"),resultTotal=document.querySelector(".calc-form__total-result"),buttonTotal=document.querySelector(".calc-form__button");buttonTotal.onclick=function(){let e=5.04*(elecInputAfter.value-elecInputBefore.value),t=6.42*(gasInputAfter.value-gasInputBefore.value),l=41.17*(waterInputAfter.value-waterInputBefore.value),n=(e+t+l).toFixed(2);elecResult.textContent=e.toString()+" руб.",gasResult.textContent=t.toString()+" руб.",waterResult.textContent=l.toString()+" руб.",resultTotal.textContent=n.toString()+" руб.",elecResult.style.color=e<0?"red":"black",gasResult.style.color=t<0?"red":"black",waterResult.style.color=l<0?"red":"black",resultTotal.style.color=n<0?"red":"black"};