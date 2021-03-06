/*
	jQuery infinite horizontal scroller plugin
	please use freely.
*/

(function($, window) {
	$.fn.fineScroller = function(options) {
		var defaults = {
			cycleTime : 1000,
			duplicates: 0,
			sliderItem: '.item'
		}
			
		var options =  $.extend(defaults, options);

		if (!$.support.transition) { $.fn.transition = $.fn.animate; }

		/* This makes a desired amount of copies of the items in the container if requested. */
		function dupeItems(container, item) {
			for (var i = 0; i < options.duplicates; i++) {
				item.clone().appendTo(container);
			}

			return container.find($(options.sliderItem));
		}

		/* Moves the first item in collection after the last, after it is out of view. */
		function swapDiv(container) {
			var first = container.find($(options.sliderItem + ':first-child'));
			var last = container.find($(options.sliderItem + ':last-child'));
			first.insertAfter(last);
		}

		/* Do this for each matched element */
		return this.each(function() {
			var o = options;
			var container = $(this);
			var item = container.find($(options.sliderItem));
			var margin;
			
			var itemWidth;
			var totalWidth;

			onLoad();

			function onLoad() {
				item = dupeItems(container, item);
				initSizes();
				moveByOne();
			}

			function initSizes() {
				margin = parseFloat(item.css('margin-right'));
				itemWidth = item.outerWidth() + margin;
				totalWidth = itemWidth * item.length;
				container.width(totalWidth);
			}

			$(window).resize(initSizes);
			
			function moveByOne() {
				container.transition({ 'left': -itemWidth }, o.cycleTime, 'linear', function() {
					container.css('left', 0);
					moveByOne();
					swapDiv(container);
				});
			}
		});
	}

}(jQuery, window))
