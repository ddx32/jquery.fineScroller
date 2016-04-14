# jquery.fineScroller
Bare-bones size-independent infinite horizontal items scroller. 
Automatically uses [jquery.transit](https://github.com/rstacruz/jquery.transit) library to provide accelerated CSS animation if supported by browser and library loaded. Gracefully falls back to jQuery.animate().

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