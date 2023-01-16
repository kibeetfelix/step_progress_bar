const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const progressEl = document.querySelector(".progress-bar-front")

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
prevEl.addEventListener("click", () => {
    currentChecked--;
    if (currentChecked < 1) {
        currentChecked = 1;
    }
    updatestepprogress();
});

function updatestepprogress() {
    stepsEl.forEach((stepEl, idx) => {
        if (idx < currentChecked) {
            stepEl.classList.add("checked");
            stepEl.innerHTML = `<i class="fas fa-check"></i> <small>${idx === 0 ? "Start" : idx === stepsEl.length - 1 ? "Final" : "Step " + idx} </small>`;
        } else {
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `<i class="fas fa-times"></i>`;
        }
    });

    const checkedNumber = document.querySelectorAll(".checked")
    progressEl.style.width = "100%"
}