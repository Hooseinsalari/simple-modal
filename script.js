const openBtn = document.querySelector("#open-modal");
const closeBtn = document.querySelector("#close-modal")
const modal = document.querySelector(".modal-container")

openBtn.addEventListener("click", () => {
    modal.classList.add("show")
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show")
})