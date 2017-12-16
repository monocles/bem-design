var mediaSection = document.querySelectorAll('.promo-cards__media-section')[0],
	mediaCard = document.querySelectorAll('.promo-cards__media')[0],
	mediaTab1 = document.querySelectorAll('.promo-cards__media-tab-1')[0],
	mediaTab2 = document.querySelectorAll('.promo-cards__media-tab-2')[0],
	mediaTab3 = document.querySelectorAll('.promo-cards__media-tab-3')[0];

mediaTab1.addEventListener('click', function() {
	mediaTab1.classList.add('text_view_letter');
	mediaTab2.classList.remove('text_view_letter');
	mediaTab3.classList.remove('text_view_letter');

	mediaSection.classList.add('promo-cards_slide_first');
	mediaSection.classList.remove('promo-cards_slide_second');
	mediaSection.classList.remove('promo-cards_slide_third');
	
	mediaCard.classList.add('promo-cards__media_type_video');
	mediaCard.classList.remove('promo-cards__media_type_text');
	mediaCard.classList.remove('promo-cards__media_type_music');
});
mediaTab2.addEventListener('click', function() {
	mediaTab1.classList.remove('text_view_letter');
	mediaTab2.classList.add('text_view_letter');
	mediaTab3.classList.remove('text_view_letter');

	mediaSection.classList.remove('promo-cards_slide_first');
	mediaSection.classList.add('promo-cards_slide_second');
	mediaSection.classList.remove('promo-cards_slide_third');
	
	mediaCard.classList.remove('promo-cards__media_type_video');
	mediaCard.classList.add('promo-cards__media_type_text');
	mediaCard.classList.remove('promo-cards__media_type_music');
});
mediaTab3.addEventListener('click', function() {
	mediaTab1.classList.remove('text_view_letter');
	mediaTab2.classList.remove('text_view_letter');
	mediaTab3.classList.add('text_view_letter');

	mediaSection.classList.remove('promo-cards_slide_first');
	mediaSection.classList.remove('promo-cards_slide_second');
	mediaSection.classList.add('promo-cards_slide_third');
	
	mediaCard.classList.remove('promo-cards__media_type_video');
	mediaCard.classList.remove('promo-cards__media_type_text');
	mediaCard.classList.add('promo-cards__media_type_music');
});