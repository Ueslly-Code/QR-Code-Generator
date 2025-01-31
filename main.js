let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let Urltext = document.getElementById("Urltext");

    // Function to generate QR code
    function generateQR() {
      let userInput = Urltext.value.trim(); // Remove extra spaces

      if (userInput.length > 0) {
        // Set QR code image source dynamically
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(userInput)}`;
        
        // Show the image box
        imgBox.classList.add("show-img");
      } else {
        // Add error effect if input is empty
        Urltext.classList.add("error");
        
        // Remove error effect after 1 second
        setTimeout(() => {
          Urltext.classList.remove("error");
        }, 1000);
      }
    }
