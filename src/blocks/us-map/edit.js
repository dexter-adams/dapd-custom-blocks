import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import { Fragment, useEffect } from '@wordpress/element';
import { Panel, PanelBody, PanelRow, CheckboxControl, TextControl, ColorPalette } from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import $ from 'jquery';

import './editor.scss';

import classnames from 'classnames';
import stateAbbreviations from 'states-abbreviations';
import MapUnitedStates from './components/MapUnitedStates';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function edit(props) {
	const { attributes, className, clientId, setAttributes } = props;
	const classes = classnames(
			'wp-block-map',
			'wp-block-map--us',
			className,
	);
	const { getBlockIndex } = select('core/block-editor');
	const blockIndex = getBlockIndex(clientId);
	const blockProps = useBlockProps({ className: classes });

	const colors = [
		{ name: 'blue', color: '#FFF' },
		{ name: 'blue', color: '#0F2044' },
		{ name: 'gold', color: '#FFB71B' },
		{ name: 'gray', color: '#BEC0C2' },
		{ name: 'teal', color: '#00698C' },
		{ name: 'red', color: '#A00C30' },
		{ name: 'lightgray', color: '#E5E6E4' },
		{ name: 'darkgray', color: '#333' },
		{ name: 'silver', color: '#A6B0B7' },
	];

	useEffect(() => {
		setAttributes({ blockIndex: blockIndex });
	}, []);

	return (
			<Fragment>
				<InspectorControls>
					<Panel
							header="State Settings"
							className="dapd-us-map-settings"
					>
						<PanelBody title="Background Color" icon="more" initialOpen={false}>
							<PanelRow>
								<ColorPalette
										colors={colors}
										value={props.backgroundColor}
										onChange={(value) => setAttributes({ backgroundColor: value ?? 'transparent'  })}
										disableCustomColors={true}
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody title="Primary Color" icon="more" initialOpen={false}>
							<PanelRow>
								<ColorPalette
										colors={colors}
										value={props.primaryColor}
										onChange={(value) => setAttributes({ primaryColor: value ?? 'transparent' })}
										disableCustomColors={true}
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody title="Hover Color" icon="more" initialOpen={false}>
							<PanelRow>
								<ColorPalette
										colors={colors}
										value={props.hoverColor}
										onChange={(value) => setAttributes({ hoverColor: value ?? 'transparent'  })}
										disableCustomColors={true}
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody title="Selected Color" icon="more" initialOpen={false}>
							<PanelRow>
								<ColorPalette
										colors={colors}
										value={props.selectedColor}
										onChange={(value) => setAttributes({ selectedColor: value ?? 'transparent'  })}
										disableCustomColors={true}
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody title="Select states to edit their URLs." icon="more" initialOpen={true}>
							<PanelRow>
								<CheckboxControl
										className="dapd-us-map-toggle-all"
										label="Toggle All"
										onChange={(value) => {
											if (value) {
												$('.dapd-us-map-settings .state').removeClass('hidden').addClass('visible');
											} else {
												$('.dapd-us-map-settings .state').removeClass('visible').addClass('hidden');
											}
										}}
								/>
							</PanelRow>
							{Object.keys(stateAbbreviations).map((state, index) => {
								// We have to check if the property exists to prevent url error.
								if (typeof props.attributes['state' + state] !== 'undefined') {
									const value = props.attributes['state' + state].url;
									const stateClassName = state === 'DC' ? 'hidden state state--md' : 'hidden state state--' + state.toLowerCase();
									return (
											<Fragment key={index}>
												<TextControl
														label={stateAbbreviations[state]}
														className={stateClassName}
														value={value}
														onChange={(value) => {
															setAttributes({ ['state' + state]: { url: value } });
														}}
														placeholder="Enter a desired url..."
												/>
											</Fragment>
									);
								}
							})}
						</PanelBody>
					</Panel>
				</InspectorControls>
				<div {...blockProps}>
					<div className="wp-block-map__top">
						<div className="map-mask"/>
						<MapUnitedStates attributes={{ ...attributes }} data-index={blockIndex}/>
						<div className="wp-block-map__list-toggle">
							<button
									className="btn btn-primary"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={'#collapse-' + blockIndex}
									aria-expanded="false"
									aria-controls={'collapse-' + blockIndex}
							>
								{__('Toggle States List')}
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
											<li
													key={index}
													className="list__item"
											>
												<a href={props.attributes['state' + state].url}>{stateAbbreviations[state]}</a>
											</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</Fragment>
	);
}
