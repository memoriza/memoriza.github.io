"use strict"

$(document).ready(function() {

	$(window).scroll(function(){
   		$(".top").css("opacity", 1 - $(window).scrollTop() / 450);
  	});

});


