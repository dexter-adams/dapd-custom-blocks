import $ from 'jquery';
import 'jqvmap/dist/jquery.vmap';
import hexToRgba from 'hex-to-rgba';

const { Component } = wp.element;

export default class MapUnitedStates extends Component {
	constructor(props) {
		super(...arguments);
		this.props = props;

		this.initMap = this.initMap.bind(this);
		this.map = {};
	}

	componentDidMount() {
		this.map = this.initMap(this.el, this.props);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// Change map background color
		if (prevProps.attributes.backgroundColor !== this.props.attributes.backgroundColor) {
			$(this.el).css({ 'background-color': this.props.attributes.backgroundColor ? hexToRgba(this.props.attributes.backgroundColor) : 'transparent' });
			this.map.backgroundColor = this.props.attributes.backgroundColor;
		}

		// Change the map primary color
		if (prevProps.attributes.primaryColor !== this.props.attributes.primaryColor) {
			const primaryColor = this.props.attributes.primaryColor ?? 'transparent';
			$(this.el).find('path').attr('fill', primaryColor);
			this.map.color = primaryColor;
		}

		// Set JQVMap object color values
		if (prevProps.attributes.hoverColor !== this.props.attributes.hoverColor) {
			this.map.hoverColor = this.props.attributes.hoverColor ?? 'transparent';
		}

		if (prevProps.attributes.selectedColor !== this.props.attributes.selectedColor) {
			this.map.selectedColor = this.props.attributes.selectedColor ?? 'transparent';
		}
	}

	initMap(el, props) {
		const { attributes: { backgroundColor, primaryColor, hoverColor, selectedColor } } = props;

		// Include custom map (North Carolina)
		require('./maps/jquery-jvectormap-us-lcc-en');

		const map = $(el).vectorMap({
			map: 'us_lcc_en',
			showTooltip: true,
			showLabels: false,
			backgroundColor: backgroundColor,
			color: primaryColor,
			hoverColor: hoverColor,
			selectedColor: selectedColor,
			onRegionClick: function(element, code, region) {
				$('.dapd-us-map-settings .state').removeClass('visible').addClass('hidden');
				$('.dapd-us-map-settings .state--' + code).removeClass('hidden').addClass('visible');
				$('.dapd-us-map-toggle-all input[type="checkbox"]').prop('checked', false);
			},
		});

		return map;
	}

	render() {
		const { attributes: { backgroundColor, primaryColor, hoverColor, selectedColor } } = this.props;

		return (
				<div className="wp-block-map__container">
					<div
							data-background-color={backgroundColor}
							data-primary-color={primaryColor}
							data-hover-color={hoverColor}
							data-selected-color={selectedColor}
							data-map="us_lcc_en"
							{...this.props}
							className="wp-block-map__map"
							ref={(el) => {
								this.el = el;
							}}
					/>
				</div>
		);
	}
}
