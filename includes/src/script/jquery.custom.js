const $ = jQuery;

/**
 * Trigger a custom event so that map load effects work.
 * Map fades in and up on page load.
 */
$(function() {
	$('.wp-block-map').trigger('mapReady');
});

/**
 * Actions that happen on the custom "mapReady" event.
 */
$('.wp-block-map').on('mapReady', function() {
	$('body').addClass('mapReady');
});

/**
 * Initiate JQVMap on frontend
 *
 * setTimeout function is used to overcome the 0 height bug
 * when the map initializes in its container element.
 */
setTimeout(function() {
	require('./jquery.map-nc');
	require('./jquery.map-us');
	require('./jquery.region-list');

	jQuery('.wp-block-map').each(function() {
		const $map = jQuery(this).find('.wp-block-map__map');
		const map = $map.data('map');
		const mapData = {
			map: map,
			showTooltip: true,
			showLabels: false,
			backgroundColor: $map.data('background-color'),
			color: $map.data('primary-color'),
			hoverColor: $map.data('hover-color'),
			selectedColor: $map.data('selected-color'),
			onRegionClick: function(element, code, region) {
				const regionCode = code.toUpperCase();

				if (typeof dataConfig[regionCode] !== 'undefined') {
					window.location.href = dataConfig[regionCode].url;
				}
			},
		};
		const dataConfig = jQuery(this).data('config');
		$map.vectorMap(mapData);
	});
}, 100);
