# slider [![Build Status](https://travis-ci.org/pointvirgule/slider.png?branch=master)](https://travis-ci.org/pointvirgule/slider)

## Use

### Constructor

You can create a new instance of the slider via the constructor `Slider`.

```
var element = document.createElement( 'div' ),

	minValue = 0,

	maxValue = 100,

	step = 5,

	slider = new Slider( element, minValue, maxValue, step );
```

### Listen to changes

You can listen to user interactions by listening the `change` event.

```
slider.on( 'change', function ( value ) {
	
	/*
	*	On a change event your callback function
	*	will provide you with the new slider value.
	*/

} );
```

### Make changes 

You can also set and get the value of the slider by the following methods.

```
// Sets the value of the slider.
slider.setValue( 70 );

// Returns the current value of the slider.
slider.getValue(); 
```

You can also set and get the percentage of the range of you slider

```
// Sets the percentage of the slider.
slider.setPercentage( 70 );

// Returns the current percentage of the slider.
slider.getPercentage(); 
```

## Style

You can change the appearance of the slider by tweaking some variables defined in the `styles/slider.less`.

Just import the stylesheet and override some variables

```less
@import (less) 'slider.less';

@slider_color: #333;
@slider_cursor_size: 10px;
@slider_cursor_border_size: 3px;
@slider_cursor_border_color: #FFF;
@slider_line_height: 2px;

```

