import classnames from 'classnames';
import stateAbbreviations from 'states-abbreviations';
import MapUnitedStates from './components/MapUnitedStates';

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
			'wp-block-map--us',
			className,
	);
	const stateData = {};


	Object.keys(stateAbbreviations).map((state) => {
		if (typeof props.attributes['state' + state] !== 'undefined') {
			if (props.attributes['state' + state].url !== '') {
				stateData[state] = { url: props.attributes['state' + state].url };
			}
		}
	});

	return (
			<div
					className={classes}
					data-config={JSON.stringify(stateData)}
			>
				<div className="wp-block-map__top">
					<div className="spinner"></div>
					<MapUnitedStates attributes={{ ...props.attributes }} data-index={blockIndex}/>
					<div className="wp-block-map__list-toggle">
						<button
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={'#collapse-' + blockIndex}
								role="button"
								aria-expanded="false"
								aria-controls={'collapse-' + blockIndex}>
							Open States List
						</button>
					</div>
				</div>
				<div className="wp-block-map__bottom">
					<div
							className="collapse"
							id={'collapse-' + blockIndex}
					>
						<ul className="wp-block-map__list list">
							{Object.keys(stateAbbreviations).map((state, index) => {
								return (
										typeof props.attributes['state' + state] !== 'undefined' && props.attributes['state' + state].url !== '' &&
										<li key={index} className="list__item"><a href={props.attributes['state' + state].url}>{stateAbbreviations[state]}</a></li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
	);
}
