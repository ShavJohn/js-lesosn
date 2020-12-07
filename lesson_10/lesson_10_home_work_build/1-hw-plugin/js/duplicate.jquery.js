(function($){
	$.fn.duplicate = function(options){
		let defaults = {
			cnt: 2,
			del: ' '
		};

		let preSettings = $.extend({}, defaults, options);

		this.each(function(i, el){
			let $elem = $(el);
			let text = $elem.html();
			let res = text;
			console.log($elem.data());
			let settings = $.extend({}, preSettings, $elem.data());

			for(let i = 1; i < settings.cnt; i++){
				res += settings.del + text;
			}

			$elem.html(res);
		});

		return this;
	}
})(jQuery);