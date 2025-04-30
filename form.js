//establish variables
const form = document.getElementById("feedbackForm");
const suggestionInput = document.getElementById("suggestion");
const response = document.getElementById("response");
//stops the page from reloading after hiting submit
form.onsubmit = function(e) {
  e.preventDefault();
//reveals the hidden text thanking the user for their feedback
  if (suggestionInput.value.trim()) {
    response.style.display = "block";
    suggestionInput.value = "";
  }
};