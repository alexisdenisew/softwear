document.addEventListener('DOMContentLoaded', function() {
  var galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(function(item) {
    var img = item.querySelector('img');
    img.addEventListener('load', function() {
      item.classList.add('loaded');
    });
  });
});


// Get the button and popover content elements
var btn = document.getElementById("myBtn");
var popover = document.getElementById("myPopover");

// Show the popover when the button is clicked
btn.addEventListener("click", function() {
  // Toggle the popover's visibility
  if (popover.style.display === "block") {
    popover.style.display = "none";
  } else {
    popover.style.display = "block";
  }

  // Set the popover's position relative to the button
  var rect = btn.getBoundingClientRect();
  popover.style.top = rect.bottom + "px";
  popover.style.left = rect.left + "px";
});


