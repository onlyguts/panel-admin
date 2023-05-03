function toggleVisibility(event) {
  event.preventDefault();
  var img = event.target;
  var hiddenImg = img.nextElementSibling;
  hiddenImg.classList.toggle("hidden");
  }