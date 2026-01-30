let interface = document.querySelector("#interface");


let counter = document.querySelector("#counter");



let decrement = document.querySelector("#decCount");

let value = document.querySelector("#value");

let increment = document.querySelector("#incCount");



let i = 0;
value.textContent = i;

decrement.addEventListener('click' , ()=>{
    i--;
    value.textContent = i;
})


increment.addEventListener('click' , ()=>{
    i++;
    value.textContent = i;
})