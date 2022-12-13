import $ from 'jquery';
import 'jqvmap/dist/jquery.vmap';
import hexToRgba from 'hex-to-rgba';

const { Component } = wp.element;

export default class MapNorthCarolina extends Component {
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
			$(this.el).css({ 'background-color': hexToRgba(this.props.attributes.backgroundColor) });
			this.map.backgroundColor = this.props.attributes.backgroundColor;
		}

		// Change the map primary color
		if (prevProps.attributes.primaryColor !== this.props.attributes.primaryColor) {
			$(this.el).find('path').attr('fill', this.props.attributes.primaryColor);
			this.map.color = this.props.attributes.primaryColor;
		}

		// Set JQVMap object color values
		if (prevProps.attributes.hoverColor !== this.props.attributes.hoverColor) {
			this.map.hoverColor = this.props.attributes.hoverColor;
		}

		if (prevProps.attributes.selectedColor !== this.props.attributes.selectedColor) {
			this.map.selectedColor = this.props.attributes.selectedColor;
		}
	}

	initMap(el, props) {
		const { attributes: { backgroundColor, primaryColor, hoverColor, selectedColor } } = props;

		// Include custom map (North Carolina)
		require('./maps/jquery-jvectormap-data-us-nc-lcc-en');

		const map = $(el).vectorMap({
			map: 'us-nc_lcc_en',
			showTooltip: true,
			showLabels: false,
			backgroundColor: backgroundColor,
			color: primaryColor,
			hoverColor: hoverColor,
			selectedColor: selectedColor,
			onRegionClick: function(element, code, region) {
				$('.dapd-nc-map-settings .county').removeClass('visible').addClass('hidden');
				$('.dapd-nc-map-settings .county--' + code).removeClass('hidden').addClass('visible');
				$('.dapd-nc-map-toggle-all input[type="checkbox"]').prop('checked', false);
				console.log('Test');
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
							data-map="us-nc_lcc_en"
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
