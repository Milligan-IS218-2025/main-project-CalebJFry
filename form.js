const form = document.getElementById("feedbackForm");
const suggestionInput = document.getElementById("suggestion");
const response = document.getElementById("response");

form.onsubmit = function(e) {
  e.preventDefault(); // Prevent page reload

  if (suggestionInput.value.trim()) {
    response.style.display = "block";  // Show thank-you message
    suggestionInput.value = "";  // Clear the text area
  }
};