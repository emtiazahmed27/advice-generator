const adviceID=document.querySelector(".advice-id"),
adviceSection=document.querySelector(".advice-section"),
diceBtn=document.querySelector(".dice-container");

let api="https://api.adviceslip.com/advice";

const advice= async()=>{
    const response=await fetch(api);
    const data=await response.json();

    adviceID.innerText=`Advice #${data.slip.id}`;
    adviceSection.innerText=`"${data.slip.advice}"`;
}

advice()

diceBtn.addEventListener("click",()=>{
    location.reload();
})

