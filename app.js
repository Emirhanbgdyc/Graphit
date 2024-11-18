window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Sayfanın yarısına geldiğinde navbar'ı göster
    if (scrollY > windowHeight / 2) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
});


//! OWL Carousel

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: false,
      dots: false, 
      nav: false,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    });
  });
