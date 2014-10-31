"use strict";

( function ( window ) {

	var Slider;

	Slider = function ( element, minValue, maxValue ) {

		this.element = element;
		this.minValue = minValue;
		this.maxValue = maxValue;

		this.pct = 0;

		this._callback = null;
		this.inflate();

	};

	Slider.prototype = {

		setPercentage : function ( pct ) {

			pct = Math.max( Math.min( pct, 1 ), 0 );

			this.pct = pct;
			this.update();

		},

		getPercentage : function () {

			return this.pct;

		},

		setValue : function ( value ) {

			value = Math.max( Math.min( value, this.maxValue ), this.minValue );
			this.pct = ( value - this.minValue ) / ( this.maxValue - this.minValue );
			this.update();

		},

		getValue : function () {

			return this.minValue + ( this.maxValue - this.minValue ) * this.pct;

		},

		on : function ( event, callback ) {

			var self = this;

			if ( event !== 'change' )
			{
				return;
			}

			this._callback = callback;

			return function () {

				self._callback = null;

			};

		},

		update : function () {

			if ( this._callback )
			{
				this._callback( this.getValue() );
			}

		},

		inflate : function () {

			this.element.classList.add( 'slider' );
			this.cursor = document.createElement( 'div' );
			this.cursor.classList.add( 'cursor' );
			this.element.appendChild( this.cursor );

		}

	};

	window.Slider = Slider;

} )( window );