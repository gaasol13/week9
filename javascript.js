function buttonIndex() {
    document.getElementById('about-this-blog').style.color='white'
}

// congrats.js

function displayCongrats() {
    var name = document.getElementById("nameInput").value.trim();
    if (name === "") {
      alert("Please enter your name.");
      return;
    }
    // Update the modal greeting with the provided name
    document.getElementById("modalGreeting").textContent = "Congratulations, " + name + "!";
    
    // Display the modal
    document.getElementById("giftModal").style.display = "block";
  }
  
  // Optional: Function to close the modal when the close icon is clicked
  function closeModal() {
    document.getElementById("giftModal").style.display = "none";
  }
  
