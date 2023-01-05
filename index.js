const btnEL = document.querySelector(".btn")
const closeEl = document.querySelector(".close-icon")
const containerEl = document.querySelector(".container")
const popupDiv = document.querySelector(".popup-container");

btnEL.addEventListener('click', () => {
    containerEl.classList.add("active")
    popupDiv.classList.remove("active-popup")
})

closeEl.addEventListener('click', () => {
    containerEl.classList.remove("active");
    popupDiv.classList.add("active-popup");
})