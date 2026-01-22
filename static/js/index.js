window.HELP_IMPROVE_VIDEOJS = false;

// jQuery-dependent code - only run if jQuery is available
if (typeof $ !== 'undefined') {
  $(document).ready(function() {
      // Check for click events on the navbar burger icon
      $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
      });

      var options = {
        slidesToScroll: 1,
        slidesToShow: 3,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
      }

      // Initialize all div with carousel class
      if (typeof bulmaCarousel !== 'undefined') {
        var carousels = bulmaCarousel.attach('.carousel', options);

        // Loop on each carousel initialized
        for(var i = 0; i < carousels.length; i++) {
          carousels[i].on('before:show', state => {
            console.log(state);
          });
        }
      }

      // Access to bulmaCarousel instance of an element
      var element = document.querySelector('#my-element');
      if (element && element.bulmaCarousel) {
        element.bulmaCarousel.on('before-show', function(state) {
          console.log(state);
        });
      }

      if (typeof bulmaSlider !== 'undefined') {
        bulmaSlider.attach();
      }
  });
}

// ==========================================
// Interactive Error Explorer Tab Switching (Vanilla JS)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  // Get all error tabs
  var errorTabs = document.querySelectorAll('.error-tab');
  var errorContents = document.querySelectorAll('.error-content');
  
  // Handle error tab clicks
  errorTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      errorTabs.forEach(function(t) {
        t.classList.remove('active');
      });
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Get the target error type
      var errorType = this.getAttribute('data-error');
      
      // Hide all error content panels
      errorContents.forEach(function(content) {
        content.classList.remove('active');
      });
      // Show the selected error content panel
      var targetContent = document.getElementById(errorType);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
    
    // Add keyboard navigation for accessibility
    tab.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Navbar burger toggle (vanilla JS fallback)
  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('.navbar-menu');
  if (burger && menu) {
    burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }
});
