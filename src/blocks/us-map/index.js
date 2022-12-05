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
			default: '#ffffff',
		},
		primaryColor: {
			type: 'string',
			default: '#0f2044',
		},
		hoverColor: {
			type: 'string',
			default: '#FFB71B',
		},
		selectedColor: {
			type: 'string',
			default: '#a6b0b7',
		},
		stateAL: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateAK: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateAZ: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateAR: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateCA: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateCO: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateCT: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateDC: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateDE: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateFL: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateGA: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateHI: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateID: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateIL: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateIN: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateIA: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateKS: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateKY: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateLA: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateME: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateMD: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateMA: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateMI: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateMN: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateMS: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateMO: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateMT: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateNE: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateNV: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateNH: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateNJ: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateNM: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateNY: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateNC: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateND: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateOH: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateOK: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateOR: {
			type: 'object',
			default: {
				url: '',
			},
		},
		statePA: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateRI: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateSC: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateSD: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateTN: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateTX: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateUT: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateVT: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateVA: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateWA: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateWV: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateWI: {
			type: 'object',
			default: {
				url: '',
			},
		},
		stateWY: {
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
