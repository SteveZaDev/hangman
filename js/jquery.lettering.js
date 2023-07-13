/*global jQuery */
/*!	
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
  console.log("reached function")
	function injector(t, splitter, klass, after) {
    console.log("t in function is = " + t.text())
    var a = t.text().split(splitter), inject = '';

    console.log("a in function is = " + a)
    console.log("splitter in function is = " + splitter)
    
		if (a.length) {
			$(a).each(function(i, item) {
        console.log("for each i = " + i + "  item = " + item)
        inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
        console.log("inject = " + inject)
			});	
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {
      console.log("reached init")
			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {
      console.log("reached words")
			return this.each(function() {
        injector($(this), ' ', 'word', ' ');
        console.log("reached words function")
			});

		},
		
		lines : function() {
      console.log("lines")
			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
    console.log("reached lettering")
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);