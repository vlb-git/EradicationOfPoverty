function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var satisfaction = document.getElementById("satisfaction").value;

    if (name.trim() == "" || email.trim() == "" || satisfaction < 1 || satisfaction > 10) {
        alert("Please fill in all required fields and ensure satisfaction is between 1 and 10.");
        return false;
    }

    // Additional custom validations can be added here
    
    // If all validations pass, show success message
    showMessage("Thank you for your feedback. Feedback is successfully received.");
    setTimeout(function(){
        window.location.href = "home.html";
    }, 3000); // Redirect after 3 seconds 
}

function showMessage(message) {
    var messageBox = document.getElementById("message-box");
    var messageContent = document.getElementById("message-content");

    // Set message content
    messageContent.innerText = message;

    // Show message box
    messageBox.style.display = "block";
}
        