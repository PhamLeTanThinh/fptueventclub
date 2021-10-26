var galleryThumbs = new Swiper('.gallery-thumbs', {
	// init: false,
	speed: 800,
	parallax: true,
	loop: true,
	effect: 'coverflow',
	grabCursor: true,
	slidesPerView: '3',
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		pauseOnMouseEnter:true,
	},

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
		300: {
			slidesPerView: 2,
			spaceBetween: 25,
			centeredSlides: true,
		},
		375: {
			slidesPerView: 2,
			spaceBetween: 35,
			centeredSlides: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
			centeredSlides: true,
		},
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
			spaceBetween: 2,
		},
		1440: {
			slidesPerView: 2,
			spaceBetween: 3,
		},
		1600: {
			slidesPerView: 2,
			spaceBetween: 5,
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

