const submit =document.querySelector(".submit");
const maincontainer=document.getElementById("maincontainer")
const thankyoucontainer=document.getElementById("thankyoucontainer")

const value1=document.getElementById("value1")
const value2=document.getElementById("value2")
const value3=document.getElementById("value3")
const value4=document.getElementById("value4")
const value5=document.getElementById("value5")
const selected=document.querySelector(".selected")

let value;
value1.addEventListener('click',()=>{value="1";
    selected.innerHTML=value;});
value2.addEventListener('click',()=>{value="2";
    selected.innerHTML=value;});
value3.addEventListener('click',()=>{value="3"
    selected.innerHTML=value;});
value4.addEventListener('click',()=>{value="4"
    selected.innerHTML=value;});
value5.addEventListener('click',()=>{value="5"
    selected.innerHTML=value;});

submit.addEventListener("click",()=>{
       maincontainer.classList.toggle("active");
       thankyoucontainer.classList.toggle("active2")
       console.log("button clicked")
});