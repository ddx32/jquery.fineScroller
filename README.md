# jquery.fineScroller
Bare-bones screen-size-independent infinite horizontal items scroller. Uses jquery.transit for smooth CSS transitions (optional).


## Usage
```javascript
$('.item-container').fineScroller();
```

# Default HTML structure
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
* `cycleTime`: time in ms to do a full cycle. default: 1000
* `duplicates`: duplicates items meant to scroll. Use if scrolling leaves empty space. default: 0