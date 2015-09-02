$(document).ready(function(){
	var x;
	var y;
	var width = $(document).width();
	var height = $(document).height();

	$(document).mousemove(function(e) {
	    x = e.pageX;
	    y = e.pageY;
	    deg();
	});

	function deg(){
		var horizontal =  (100 - Math.round(x*100/width)) + '%';
		var vertical = (100 - Math.round(y*100/height)) + '%';
		console.log("horizontal:" + horizontal);
		console.log("vertical:" + vertical);
		$(".shadow").css({"top": vertical, "left": horizontal });
	}
})