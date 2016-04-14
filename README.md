# jquery.fineScroller
Bare-bones resolution-independent infinite horizontal items scroller. Uses jquery.transit for smooth CSS transitions.


## Usage
```javascript
$('.item-container').fineScroller({
	cycleTime : 3000,	// time in ms to do a full cycle
	duplicates : 1		// duplicates items meant to scroll. Use if scrolling leaves empty space
});
```