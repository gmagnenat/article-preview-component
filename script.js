// prepare elements
const shareBtn = document.getElementById("share-btn");
const shareOptions = document.getElementById("share-options");

// Toggle the share options state
function toggleShareOptions() {
  shareBtn.classList.toggle("--active");
  shareOptions.classList.toggle("--active");
}

// Update the share button state (back to default)
function updateShareOptionsState() {
  shareBtn.classList.remove("--active");
  shareOptions.classList.remove("--active");
}

// add event listeners
shareBtn.addEventListener("click", () => {
  toggleShareOptions();
});

// Update the share button state on escape key press
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    updateShareOptionsState();
  }
});

// Update the share button state when the user clicks outside the button
document.addEventListener("click", (e) => {
  if (!shareBtn.contains(e.target)) {
    updateShareOptionsState();
  }
});
