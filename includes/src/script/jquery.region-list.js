// Map Blocks
jQuery('.wp-block-map__list-toggle button').on('click', function() {
	const btn = jQuery(this);
	const btnText = btn.text();
	const updatedBtnText = btnText.includes('Open') ? btnText.replace('Open', 'Close') : btnText.replace('Close', 'Open');
	btn.toggleClass('active').text(updatedBtnText);
});
