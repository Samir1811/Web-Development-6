// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      // Prevent page refresh
      event.preventDefault();
  
      // Get values from inputs
      const name = document.querySelector('input[name="fullname"]').value;
      const position = document.querySelector('select[name="position"]').value;
  
      // Create custom message
      const message = `Thank you ${name}, Your application for ${position} has been received`;
  
      // Display message on page
      const response = document.getElementById("responseMessage");
      response.textContent = message;
  
      // Optional: reset form
      form.reset();
    });
  
  });