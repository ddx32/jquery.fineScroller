# jquery.fineScroller
Bare-bones size-independent infinite horizontal items scroller jQuery plugin.
Optionally uses [jquery.transit](https://github.com/rstacruz/jquery.transit) library (if loaded) to provide smooth CSS animation if supported by browser. Falls back to jQuery.animate().

* can't get any more lightweight than this
* adapts to your html and styles
* as minimal and unopinionated as it gets

## Usage
```javascript
$('.item-container').fineScroller();
```

## Default HTML structure
```html
<div class="item-container">
	<div class="item">
		Single Item
	</div>

	<div class="item">
		Single Item
	</div>
</div>
```

## Options
* `cycleTime` : time in ms to do a full cycle. *default*: `1000`
* `duplicates` : if the scrolling leaves empty space, add some item duplicates to fill up the container. *default*: `0`
* `sliderItem` : override the default inner item selector of `'.item'`

## Install using npm
```
npm i --save jquery.finescroller
```
