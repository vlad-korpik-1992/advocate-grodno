$(document).ready(function() {
	$('.slider__box').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		rows: 1,
		dots: false,
		autoplay: true,
		infinite: true,
		adaptiveHeight: true,
		responsive: [
           {
             breakpoint: 500,
             settings: {
               slidesToShow: 1
             }
           }
       ] 
	});
	$('.menu__btn').on('click', function (e) {
        e.preventDefault();
        $('.menu__list').toggleClass('menu__list_active');
    });
	$('.slider__box').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return '<small>Грицкевич Екатерина Викторовна</small>';
			}
		}
	});
});