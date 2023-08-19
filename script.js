// Get references to the HTML elements
const timeDisplay = document.querySelector('.time');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');
const lapButton = document.querySelector('.lap');
const lapList = document.querySelector('.lap-list');

// Variables to store start time and interval ID
let startTime, intervalId;

// Function to update the time display
const updateDisplay = () => {
  // Calculate elapsed time in milliseconds
  const currentTime = new Date();
  const elapsedTime = currentTime - startTime;
  
  // Convert elapsed time to a formatted string
  const formattedTime = new Date(elapsedTime).toISOString().substr(11, 8);
  
  // Update the time display
  timeDisplay.textContent = formattedTime;
};

// Start button click event
startButton.addEventListener('click', () => {
  // Only start if not already started
  if (!startTime) {
    startTime = new Date();
    intervalId = setInterval(updateDisplay, 10); // Update display every 10ms
  }
});

// Pause button click event
pauseButton.addEventListener('click', () => {
  clearInterval(intervalId); // Stop the interval
  startTime = null; // Reset the start time
});

// Reset button click event
resetButton.addEventListener('click', () => {
  clearInterval(intervalId); // Stop the interval
  startTime = null; // Reset the start time
  timeDisplay.textContent = '00:00:00.000'; // Reset time display
  lapList.innerHTML = ''; // Clear lap list
});

// Lap button click event
lapButton.addEventListener('click', () => {
  if (startTime) {
    const lapTime = timeDisplay.textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
  }
});