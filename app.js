// Get the range input and the display element
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");

// Function to format seconds into minutes:seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Event listener for when the range slider value changes
progress.addEventListener("input", () => {
  const timeInSeconds = parseInt(progress.value); // Get current slider value
  currentTime.textContent = formatTime(timeInSeconds); // Update display
});
