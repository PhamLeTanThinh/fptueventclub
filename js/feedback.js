var galleryThumbs = new Swiper('.gallery-thumbs', {
	// init: false,
	speed: 800,
	parallax: true,
	loop: true,
	effect: 'coverflow',
	grabCursor: true,
	slidesPerView: '3',
	centeredSlides: true,

	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	breakpoints: {
		// 640: {
		//   slidesPerView: 1,
		//   spaceBetween: 0,
		//   centeredSlides: true,
		// },
		// 736: {
		// 	slidesPerView: 1,
		// 	spaceBetween: 10,
		// 	centeredSlides: false,

		// },
		850: {
			slidesPerView: 3,
			spaceBetween: 0,
			centeredSlides: true,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 80,
		},
		1280: {
			slidesPerView: 2,
			spaceBetween: 1,
		},
		1360: {
			slidesPerView: 2,
			spaceBetween: 1,
		},
		1400: {
			slidesPerView: 2,
			spaceBetween: 1,
		},
		1440: {
			slidesPerView: 2,
			spaceBetween: 1,
		},
		1600: {
			slidesPerView: 2,
			spaceBetween: 4,
		},
		1680: {
			slidesPerView: 2,
			spaceBetween: 3,
		},
		1920: {
			slidesPerView: 3,
			spaceBetween: 3,
		},

	}

});


var galleryTop = new Swiper('.swiper-container.testimonial', {
	speed: 400,
	spaceBetween: 50,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	direction: 'vertical',
	pagination: {
		clickable: true,
		el: '.swiper-pagination',
		type: 'bullets',
	},
	thumbs: {
		swiper: galleryThumbs
	}
});
