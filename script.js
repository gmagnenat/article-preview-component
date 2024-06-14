// prepare elements
const shareBtn = document.getElementById("share-btn");
const shareOptions = document.getElementById("share-options");

// add event listeners
shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("--active");
  shareOptions.classList.toggle("--active");
});

// Update the share button state on escape key press
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    shareBtn.classList.remove("--active");
    shareOptions.classList.remove("--active");
  }
});

// Update the share button state when the user clicks outside the button
document.addEventListener("click", (e) => {
  if (!shareBtn.contains(e.target)) {
    shareBtn.classList.remove("--active");
    shareOptions.classList.remove("--active");
  }
});
