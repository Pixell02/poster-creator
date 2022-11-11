const range = document.querySelector("input[type='range'");

window.addEventListener("DOMContentLoaded", (e) => {
document.querySelector(".number-container").innerHTML = 0;
});

range.addEventListener("mousemove", (e) => {
  document.querySelector(".number-container").innerHTML = range.value;
  document.querySelector(".price-container").innerHTML = range.value*50 + " zł";
})
    
