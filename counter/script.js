const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const resetBtn = document.querySelector('.reset')

const countBtn = document.querySelector(".count");
const changeBy = document.querySelector(".changeBy");


minusBtn.addEventListener("click", () => {
    const countValue = parseInt(countBtn.innerText)
    const changeByValue = parseInt(changeBy.value);
   countBtn.innerText = countValue - changeByValue; 
})

plusBtn.addEventListener('click', () => {
    const countValue = parseInt(countBtn.innerText);
    const changeByValue = parseInt(changeBy.value)
    countBtn.innerText = countValue + changeByValue ;
})

resetBtn.addEventListener('click', () => {
    countBtn.innerText = 0;
})



