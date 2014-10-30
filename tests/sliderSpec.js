"use strict";

describe( 'Slider', function () {

	var Slider = window.Slider;

	it( 'should be instanciable', function () {

		var slider = new Slider( document.createElement( 'div' ), 0, 100 );

		expect(slider).not.toBeUndefined();

	} );

	it( 'value should be changed', function () {

		var slider = new Slider( document.createElement( 'div' ), 0, 100 );

		slider.setValue( 70 );
		expect( slider.getValue() ).toEqual( 70 );
		expect( slider.getPercentage() ).toEqual( 0.70 );

	} );

	it( 'percentage should be changed', function () {

		var slider = new Slider( document.createElement( 'div' ), 0, 100 );

		slider.setPercentage( 0.7 );
		expect( slider.getValue() ).toEqual( 70 );
		expect( slider.getPercentage() ).toEqual( 0.70 );

	} );

} );
