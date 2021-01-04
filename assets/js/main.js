let UTILS = (function() {
    let utils = {};

    utils.zoom = function(e) {
      let zoomer = e.currentTarget;
      e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
      e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
      x = offsetX/zoomer.offsetWidth*50
      y = offsetY/zoomer.offsetHeight*50
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
    }

    return utils;
})();

let CLIFFS = (function() {
  let cliffs = {};

  cliffs.init = function() {
    $('.cliffs-gallery').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: false,
      fade: true,
      pauseOnHover: false
    });
    $('.cliffs-gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      let $el = $('.cliffs-gallery img:eq(' + nextSlide + ')');
      //$('.cliffs').css('background-color', $el.attr('data-background'));
      $('.cliffs-description').css('color', $el.attr('data-color'));
      console.log(nextSlide);
    });

    $('.cliffs-gallery').on('click', function() {
      $('.cliffs-gallery').slick('slickNext');
    });
  }
    
  return cliffs;
})();

let WAVES = (function() {
  let waves = {};

  waves.init = function() {
    $('.waves-gallery').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      arrows: false,
      fade: true,
      pauseOnHover: false
    });
    $('.waves-gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      let $el = $('.waves-gallery img:eq(' + nextSlide + ')');
      $('.waves').css('background-color', $el.attr('data-background'));
      $('.waves').css('color', $el.attr('data-color'));
      console.log(nextSlide);
    });

    $('.waves-gallery').on('click', function() {
      $('.waves-gallery').slick('slickNext');
    });
  }
    
  return waves;
})();

  let PARROTS = (function() {
    let parrots = {};

    parrots.init = function() {
      let $gallery = $('.parrots .parrots-gallery');
      $gallery.slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
        fade: true,
        pauseOnHover: true
      });

      $gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        let $prev;
        $('.dot').each(function() {
          let $dot = $(this);

          if ($(this).attr('data-parrot') > nextSlide) {
            if ($prev) {
              $dot = $prev;
            }
          };

          $('.dot.selected').removeClass('selected');
          $dot.addClass('selected');

          $prev = $(this);
        });            
      });
      
      $gallery.on('click', function() {
        $gallery.slick('slickNext');
      });

      $('.dot').on('click', function() {
        let parrot = $(this).attr('data-parrot');

        $('.dot.selected').removeClass('selected');
        $(this).addClass('selected');
        $('.parrots .parrots-gallery').slick('slickGoTo', parrot);
      });

      //$('.parrots figure').on('mousemove', function(e) {
      //  UTILS.zoom(e);
      //});
    }

    return parrots;
  })();

  $(function(){
    CLIFFS.init();
    WAVES.init();
    PARROTS.init();
  });