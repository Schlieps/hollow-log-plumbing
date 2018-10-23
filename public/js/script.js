 // preloader
    window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'));

$(document).ready(function(){
    
    //navbar toggler
    $('.navbar-toggler').click(function(){
      $('.navbar-toggler').toggleClass('change')
    });
    
    // magnific popup
    $('.parent-container').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery:{
        enabled:true
      }
      // other options
    });
    
    // init Isotope
    var $grid = $('.grid').isotope({
      // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.isotope('layout');
    });
});
