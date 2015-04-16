// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require typed
//= require_tree .


$(document).ready(function(){
	homepageInit();
})


function homepageInit() {
	$('.looking-glass').css('height', $(window).height())

	$(function(){
	  $(window).load(function(){
	    $(".element").typed({
	      strings: ["web development", "ruby on rails", "javascript", "Anthropologist Programmer"],
	      typeSpeed: 0,
	      backspeed: 20000
	    });
	  })
	});



	$(function(){
	  var current;
	  $(document).mousemove(function(cursor){
	      var left = cursor.pageX, top = cursor.pageY, win = $(window),
	          width = win.width(), height = win.height(), horizontal, vertical, id;

	      if( left < width / 3 ){
	        horizontal = "left";
	      } else if ( (left > width / 3) && ( left < (width - width / 3)) ){
	        horizontal = "center";
	      } else if (left > width / 3) {
	        horizontal = "right";
	      }
	      if( top < height / 3 ){
	        vertical = "top";
	      } else if ( (top > height / 3) && ( top < (height - height / 3)) ){
	        vertical = "center";
	      } else if (top > height / 3) {
	        vertical = "bot";
	      }

	      id = vertical + horizontal;
	      
	      if(id == current) {
          return;
	      }

	      console.log("id => " + id)
	     
	      current = id;
	      $(".topher-face img").attr('src', '/assets/'+ id + ".JPG");
	  });
	})	
}
