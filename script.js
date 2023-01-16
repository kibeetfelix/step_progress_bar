const nextEl = document.getElementById("next");

const stepsEl = document.querySelectorAll(".step");

console.log(stepsEl);

let currentChecked = 1;

nextEl.addEventListener("click", () => {
    currentChecked++;
    console.log(currentChecked);
});