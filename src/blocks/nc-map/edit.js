import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import { Fragment, useEffect } from '@wordpress/element';
import { Panel, PanelBody, PanelRow, CheckboxControl, TextControl, ColorPalette } from '@wordpress/components';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import $ from 'jquery';

import './editor.scss';

import classnames from 'classnames';
import ncCountyCodes from './components/data/nc-fips';
import MapNorthCarolina from './components/MapNorthCarolina';

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
			'wp-block-map--nc',
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
							className="dapd-nc-map-settings"
					>
						<PanelBody title="Background Color" icon="more" initialOpen={false}>
							<PanelRow>
								<ColorPalette
										colors={colors}
										value={props.backgroundColor}
										onChange={(value) => setAttributes({ backgroundColor: value })}
										disableCustomColors={true}
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody title="Primary Color" icon="more" initialOpen={false}>
							<PanelRow>
								<ColorPalette
										colors={colors}
										value={props.primaryColor}
										onChange={(value) => setAttributes({ primaryColor: value })}
										disableCustomColors={true}
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody title="Hover Color" icon="more" initialOpen={false}>
							<PanelRow>
								<ColorPalette
										colors={colors}
										value={props.hoverColor}
										onChange={(value) => setAttributes({ hoverColor: value })}
										disableCustomColors={true}
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody title="Selected Color" icon="more" initialOpen={false}>
							<PanelRow>
								<ColorPalette
										colors={colors}
										value={props.selectedColor}
										onChange={(value) => setAttributes({ selectedColor: value })}
										disableCustomColors={true}
								/>
							</PanelRow>
						</PanelBody>
						<PanelBody title="Select states to edit their URLs." icon="more" initialOpen={true}>
							<PanelRow>
								<CheckboxControl
										className="dapd-nc-map-toggle-all"
										label="Toggle All"
										onChange={(value) => {
											if (value) {
												$('.dapd-nc-map-settings .county').removeClass('hidden').addClass('visible');
											} else {
												$('.dapd-nc-map-settings .county').removeClass('visible').addClass('hidden');
											}
										}}
								/>
							</PanelRow>
							{Object.keys(ncCountyCodes).map((county, index) => {
								// We have to check if the property exists to prevent url error.
								if (typeof props.attributes['county' + county] !== 'undefined') {
									const value = props.attributes['county' + county].url;
									return (
											<Fragment key={index}>
												<TextControl
														label={ncCountyCodes[county]}
														className={'hidden county county--' + county}
														value={value}
														onChange={(value) => {
															setAttributes({ ['county' + county]: { url: value } });
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
						<MapNorthCarolina attributes={{ ...attributes }} data-index={blockIndex}/>
						<div className="wp-block-map__list-toggle">
							<button
									className="btn btn-primary"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={'#collapse-' + blockIndex}
									aria-expanded="false"
									aria-controls={'collapse-' + blockIndex}
							>
								{__('Toggle Counties List')}
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
											<li
													key={index}
													className="list__item"
											>
												<a href={props.attributes['county' + county].url}>{ncCountyCodes[county]}</a>
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
