'use strict';

( function ( window ) {
	
	var ColorPicker = window.ColorPicker,
		el = window.document.getElementById( 'test' ),
		picker = new ColorPicker( el ),
		body = window.document.getElementsByTagName( 'body' )[0];

	picker.on( 'change', function ( color ) {

		body.setAttribute( 'style', 'background:' + color + ';' );

	} );

} )( window );