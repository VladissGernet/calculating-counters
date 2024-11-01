const Services={electricity:5.48,gas:7.13,water:44.88},servicesList=document.querySelector(".calc__list"),servicesItems=servicesList.querySelectorAll(".calc__amount"),form=document.querySelector(".calc-form"),formSets=form.querySelectorAll(".calc-form__set"),formTotalResult=form.querySelector(".calc-form__total-result");servicesItems.forEach((e=>{e.textContent=Services[e.getAttribute("id")]}));const checkInput=e=>{0===e.value.length&&(e.value="0")},calcValue=(e,t,r)=>(Number(t)-Number(e))*Services[r],translateToString=e=>e.toFixed(2).toString()+" руб.",validateValue=(e,t)=>{t.style.color=e<0?"#ff0000":"#000000"},calcSet=e=>{const t=e.querySelector(".js-input-before"),r=e.querySelector(".js-input-after"),l=e.querySelector(".js-result");checkInput(t),checkInput(r);const c=(o=t.value,a=r.value,s=e.dataset.set,(Number(a)-Number(o))*Services[s]);var o,a,s;return validateValue(c,l),l.textContent=translateToString(c),c},calcTotalSum=e=>{let t=0;e.forEach((e=>{t+=calcSet(e)})),formTotalResult.textContent=translateToString(t),validateValue(t,formTotalResult)},onSubmit=e=>{e.preventDefault(),calcTotalSum(formSets)};form.addEventListener("submit",onSubmit);