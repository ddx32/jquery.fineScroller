# jquery.fineScroller
Bare-bones size-independent infinite horizontal items scroller jQuery plugin. 
Optionally uses [jquery.transit](https://github.com/rstacruz/jquery.transit) library (if loaded) to provide smooth CSS animation if supported by browser. Falls back to jQuery.animate().

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
* `duplicates` : duplicates items meant to scroll. Use if scrolling leaves empty space. *default*: `0`
* `sliderItem` : override the default inner item selector of `'.item'`

## Install using Bower
```
bower install jquery.fineScroller --save-dev
```