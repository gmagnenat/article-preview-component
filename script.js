// prepare elements
const shareBtn = document.getElementById("share-btn");
const shareOptions = document.getElementById("share-options");

// function to hide the options
function closeShareOptions() {
  shareBtn.setAttribute("aria-expanded", "false");
}

// when the button is clicked check if the attribute aria-expanded is true or false
shareBtn.addEventListener("click", () => {
  const expanded = shareBtn.getAttribute("aria-expanded") === "true" || false;
  // toggle the attribute aria-expanded
  shareBtn.setAttribute("aria-expanded", !expanded);
});

// when I click outside the button, hide the options
document.addEventListener("click", (event) => {
  if (event.target !== shareBtn) {
    closeShareOptions();
  }
});

// when I press the escape key, hide the options
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeShareOptions();
  }
});
