(function($){

	$.fn.menuHorizontal = function(options){

		var defaults = {};
		var settings = $.extend({}, defaults, options);

		return this.each(function(){
			var obj = $(this);

			// Que ocupe todo el contenedor en IE
			obj.after('<div style="clear:both; width:0; height:0;"></div>');
			// Agrego clases para compatibilidad con IE en el CSS
			$('> li', obj).addClass('.first-level').find('ul').addClass('.submenu');
			$('> li:first', obj).addClass('first');
			$('> li:last', obj).addClass('last');
			// Agrego los eventos para desplegar el menu
			$('> li', obj).mouseenter(function(){
				$(this).addClass('active').find('ul').stop(true, true).slideDown();
			}).mouseleave(function(){
				$(this).removeClass('active').find('ul').stop(true, true).slideUp();
			});

		});

	}

})(jQuery);