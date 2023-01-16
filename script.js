const nextEl = document.getElementById("next");

const stepsEl = document.querySelectorAll(".step");

console.log(stepsEl);

let currentChecked = 1;

nextEl.addEventListener("click", () => {
    currentChecked++;
    if (currentChecked > stepsEl.length) {
        currentChecked = stepsEl.length;
    }
    updatestepprogress();
});

function updatestepprogress() {
    stepsEl.forEach((stepEl, idx) =>){
        if (idx < currentChecked) {
            stepEl.classList.add("checked");
            stepEl.innerHTML = `<i class="fas fa-check"></i> <small>${idx === 0 ? "Start" : idx === stepsEl.length - 1 ? "Final" : "Step " + idx} </small>`;
        }
    }
}