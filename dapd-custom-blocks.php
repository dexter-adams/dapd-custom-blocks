<?php
/**
 * Plugin Name:       DAPD Custom Blocks
 * Description:       Custom React blocks for Gutenberg.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Dexter Adams
 * Author URI:        https://dapd.net
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dapd-custom-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_dapd_custom_blocks_block_init() {
	register_block_type( __DIR__ . '/build/blocks/nc-map' );
	register_block_type( __DIR__ . '/build/blocks/us-map' );
}

add_action( 'init', 'create_block_dapd_custom_blocks_block_init' );

function dapd_custom_blocks_assets() {
	if ( has_block( 'dapd/nc-map' ) || has_block( 'dapd/us-map' ) ) {
		wp_enqueue_style( 'dapd-cb-style', plugin_dir_url( __FILE__ ) . 'includes/dist/main.css', [], null );
		wp_enqueue_script( 'dapd-cb-script', plugin_dir_url( __FILE__ ) . 'includes/dist/main.js', [ 'jquery' ], null, true );
	}
}

add_action( 'enqueue_block_assets', 'dapd_custom_blocks_assets' );

function dapd_custom_blocks_editor_assets() {
	if ( has_block( 'dapd/nc-map' ) || has_block( 'dapd/us-map' ) ) {
		wp_enqueue_style( 'dapd-cb-style', plugin_dir_url( __FILE__ ) . 'includes/dist/editor.css', [], null );
		wp_enqueue_script( 'dapd-cb-script', plugin_dir_url( __FILE__ ) . 'includes/dist/editor.js', [ 'jquery' ], null, true );
	}
}

add_action( 'enqueue_block_editor_assets', 'dapd_custom_blocks_editor_assets' );

