document.addEventListener("DOMContentLoaded", function() {
    var gifContainer = document.querySelector('.gif-container');
    var gif = document.getElementById('welcomeGif');
    var body = document.querySelector('body');
  
    // Assume the GIF is visible as part of .gif-container display: block;
    gif.onload = function() {
        // This ensures the GIF is centered and displayed upon loading
        body.classList.add('initial-load');
    };
  
    // Hide the GIF after 5 seconds, then show the rest of the content
    setTimeout(function() {
        gifContainer.style.display = 'none';
        body.classList.add('ready'); // Signify the rest of the page is ready
        body.classList.remove('initial-load'); // Allow displaying other elements

        // Now the CSS will no longer hide your .navbar and .splash-image due to the :not(.ready) selector
    }, 3700); // Adjust time as needed

    // Hamburger menu interaction
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('.menu');
  
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//   var hamburger = document.querySelector('.hamburger');
//   var menu = document.querySelector('.menu');

//   hamburger.addEventListener('click', function() {
//     menu.classList.toggle('active');
//   });
// });



// pop-over stuff

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById('popOver').style.display = 'block';
    }, 5000); // Pop-over appears after 3 seconds
  
    document.getElementById('closeBtn').addEventListener('click', function() {
      document.getElementById('popOver').style.display = 'none';
    });
  });
  
  function checkAnswer(color) {
    const feedback = document.getElementById('feedback');
    const correctColor = 'pink';
    const buttons = document.querySelectorAll('.color-btn');
  
    buttons.forEach(button => {
      button.style.backgroundColor = '';
    });
  
    if (color === correctColor) {
      feedback.textContent = `Yes! Only 17.4% of total global e-waste is known to have been collected and properly recycled. This figure has fallen in the last 5 years. softwear by lex wants to change that.`; 
      event.target.style.backgroundColor = 'green';
    } else {
      feedback.textContent = `Nope! Only 17.4% of total global e-waste is known to have been collected and properly recycled. This figure has fallen in the last 5 years. softwear by lex wants to change that.`;
      event.target.style.backgroundColor = 'red';
    }
  
    // Hide pop-over after 3 seconds
    setTimeout(function() {
      document.getElementById('popOver').style.display = 'none';
    }, 5000);
  }
   


  function scrollToSection() {
    var selectedSection = document.getElementById("scrollMenu").value;
    if (selectedSection) {
      document.getElementById(selectedSection).scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
