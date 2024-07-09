const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counter_display = document.getElementById("counter");
let counter = 0;
increase.onclick = function(){
    counter++;
    counter_display.innerHTML = counter;
}
decrease.onclick = function(){
    counter--;
    counter_display.innerHTML = counter;
}
reset.onclick = function(){
    counter = 0;
    counter_display.innerHTML = counter;
}