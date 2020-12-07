(function($){

	$.fn.duplicate = function(options){
		let defaults = {
			cnt: 2,
			del: ' '
		};

		let settings = $.extend({}, defaults, options);

		this.each(function(i, el){
			let $elem = $(el);
			let text = $elem.html();
			let res = text;

			for(let i = 1; i < settings.cnt; i++){
				res += settings.del + text;
			}

			$elem.html(res);
		});

		return this;
	}
})(jQuery);