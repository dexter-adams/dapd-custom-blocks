/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	title: metadata.title,
	icon: metadata.icon,
	category: metadata.category,
	supports: metadata.supports,
	attributes: {
		blockIndex: {
			type: 'number',
		},
		backgroundColor: {
			type: 'string',
			default: '#FFF',
		},
		primaryColor: {
			type: 'string',
			default: '#0F2044',
		},
		hoverColor: {
			type: 'string',
			default: '#FFB71B',
		},
		selectedColor: {
			type: 'string',
			default: '#A6B0B7',
		},
		'county37001': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37003': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37005': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37007': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37009': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37011': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37013': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37015': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37017': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37019': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37021': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37023': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37025': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37027': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37029': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37031': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37033': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37035': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37037': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37039': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37041': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37043': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37045': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37047': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37049': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37051': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37053': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37055': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37057': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37059': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37061': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37063': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37065': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37067': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37069': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37071': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37073': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37075': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37077': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37079': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37081': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37083': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37085': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37087': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37089': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37091': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37093': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37095': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37097': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37099': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37101': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37103': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37105': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37107': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37109': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37111': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37113': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37115': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37117': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37119': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37121': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37123': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37125': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37127': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37129': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37131': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37133': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37135': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37137': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37139': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37141': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37143': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37145': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37147': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37149': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37151': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37153': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37155': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37157': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37159': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37161': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37163': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37165': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37167': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37169': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37171': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37173': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37175': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37177': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37179': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37181': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37183': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37185': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37187': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37189': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37191': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37193': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37195': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37197': {
			type: 'object',
			default: {
				url: '',
			},
		},
		'county37199': {
			type: 'object',
			default: {
				url: '',
			},
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,
});
