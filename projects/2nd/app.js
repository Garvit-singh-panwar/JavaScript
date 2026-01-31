let modal = document.querySelector("#modal");
let share = document.querySelector("#share");
let closeModal = document.querySelector("#closeModal");

// Hide by default
modal.style.display = "none";

share.addEventListener('click', () => {
    modal.style.display = "block";
    // Force a reflow/reset by removing the class first (just in case)
    modal.classList.remove("active");
    
    // Use a tiny delay or void offset to trigger the browser to restart the animation
    void modal.offsetWidth; 
    
    modal.classList.add("active");
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
    modal.classList.remove("active");
});