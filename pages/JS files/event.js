
document.addEventListener('click',toggleClass);

function toggleClass(){
  document.getElementById("play").classList.toggle('goDown');
}
// ticket counter
// Define the booking countdown duration in seconds
const countdownDuration = 10; // Change this value as needed

// Initialize the booking countdown
let countdown = 50;

// Function to update the countdown notification
function updateCountdownNotification() {
  const countdownNotification = document.getElementById("countdownNotification");
  countdownNotification.textContent = `Remaining Bookings: ${countdown}`;
}

// Function to handle the ticket booking
function bookTicket() {
  if (countdown > 0) {
    countdown--;
    updateCountdownNotification();

    // Start the countdown notification
    setTimeout(() => {
      if (countdown > 0) {
        alert("Your booking has been confirmed!");
      } else {
        alert("Sorry, no more bookings available.");
      }
    }, countdownDuration * 1000);
  } else {
    alert("Sorry, no more bookings available.");
  }
}

// Initialize the countdown notification
updateCountdownNotification();
