let num1=50
let num2=20
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2


let sumEl=document.getElementById("sum-el")
function add(){
    let result=num1+num2
    //sumEl.textContent="Result: "+result
    sumEl.textContent=result
}
function sub(){
    let result=num1-num2
   // sumEl.textContent="Result: "+result
    sumEl.textContent=result
}
function divide(){
    let result=num1/num2
   // sumEl.textContent="Result: "+result
    sumEl.textContent=result
}
function multiply(){
    let result=num1*num2
   // sumEl.textContent="Result: "+result
    sumEl.textContent=result
}