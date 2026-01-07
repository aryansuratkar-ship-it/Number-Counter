const increment = document.querySelector("#btn2");
const decrement = document.querySelector("#btn1");
const counter = document.querySelector(".show");
// let i = 0;

let count = 0;

increment.addEventListener("click",() => {
   count ++;
counter.textContent = count;
});

decrement.addEventListener("click",() => {
   count --;
counter.textContent = count;
});