let swiper = new Swiper('.blog-slider', {
	passiveListeners:true,
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
    autoplay: {
    disableOnInteraction: true,
	delay:3000
    },
	mousewheel: {
		invert: false,
	},
	// autoHeight: true,
	pagination: {
		el: '.blog-slider__pagination',
		clickable: true,
	}
});

  let comtainer = document.getElementById('swiper_container');
      comtainer.onmouseenter = function () {
        swiper.autoplay.stop();
      };
      comtainer.onmouseleave = function () {
        swiper.autoplay.start();
      }


