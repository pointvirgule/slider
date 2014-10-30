"use strict";

( function ( window ) {

	var Slider;

	Slider = function ( element, minValue, maxValue ) {

		this.element = element;
		this.minValue = minValue;
		this.maxValue = maxValue;

		this.pct = 0;

	};

	Slider.prototype = {

		setPercentage : function ( pct ) {

			pct = Math.max( Math.min( pct, 1 ), 0 );

			this.pct = pct;

		},

		getPercentage : function () {

			return this.pct;

		},

		setValue : function ( value ) {

			value = Math.max( Math.min( value, this.maxValue ), this.minValue );

			this.pct = ( value - this.minValue ) / ( this.maxValue - this.minValue );

		},

		getValue : function () {

			return this.minValue + ( this.maxValue - this.minValue ) * this.pct;

		}

	};

	window.Slider = Slider;

} )( window );