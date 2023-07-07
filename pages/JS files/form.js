document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  showAlert("Your message has been submitted successfully!");
  this.reset();
});

function showAlert(message) {
  alert("Your message has been submitted successfully!");
}
