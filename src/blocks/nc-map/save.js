import classnames from 'classnames';
import ncCountyCodes from './components/data/nc-fips';
import MapNorthCarolina from './components/MapNorthCarolina';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const { attributes: { blockIndex }, className } = props;
	const classes = classnames(
			'wp-block-map',
			'wp-block-map--nc',
			className,
	);
	const countyData = {};

	Object.keys(ncCountyCodes).map((county) => {
		if (typeof props.attributes['county' + county] !== 'undefined') {
			if (props.attributes['county' + county].url !== '') {
				countyData[county] = { url: props.attributes['county' + county].url };
			}
		}
	});

	return (
			<div
					className={classes}
					data-config={JSON.stringify(countyData)}
			>
				<div className="wp-block-map__top">
					<div className="spinner"></div>
					<MapNorthCarolina attributes={{ ...props.attributes }} data-index={blockIndex}/>
					<div className="wp-block-map__list-toggle">
						<button
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={'#collapse-' + blockIndex}
								role="button"
								aria-expanded="false"
								aria-controls={'collapse-' + blockIndex}>
							{__('Open Counties List')}
						</button>
					</div>
				</div>
				<div className="wp-block-map__bottom">
					<div
							className="collapse"
							id={'collapse-' + blockIndex}
					>
						<ul className="wp-block-map__list list">
							{Object.keys(ncCountyCodes).map((county, index) => {
								return (
										typeof props.attributes['county' + county] !== 'undefined' && props.attributes['county' + county].url !== '' &&
										<li key={index} className="list__item"><a href={props.attributes['county' + county].url}>{ncCountyCodes[county]}</a></li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
	);
}
