$(function() {
			$("li").click(function(open) {
			  e.preventDefault();
			  $("li").removeClass("selected");
			  $(this).addClass("selected");
			});
		});