// Get the modal
var modal = document.getElementById("myModal");


// Get the links that open the modal
var modalLinks = document.getElementsByClassName("modalLink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
for (let i = 0; i < modalLinks.length; i++) {
    modalLinks[i].onclick = function() {
        var message = document.getElementById("modalText");
        message.innerHTML = "another message - " + i.toString();
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}