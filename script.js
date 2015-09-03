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
		var transform = Math.round(x*180/width) - 90;
		var vertical = (Math.round(y*100/height)) + '%';
		var colorLeft = Math.round(x*50/width) + 200;
		var colorRight = (50 - Math.round(x*50/width)) + 200;
		var shadowLeft = Math.round(x*20/width) + 10;
		var shadowRight = (20 - Math.round(x*20/width)) + 10;
		var yBox = Math.round(x*6/height) - 3;
		var xBox = 3 - Math.round(y*6/height);
		var page = Math.round(x*100/width) + 40;
		$(".shadow").css({
			"height": vertical,  
			"-webkit-transform": "skew(" + transform + "deg)" + " translateX(-50%) rotateX(45deg)",
		    "-moz-transform": "skew(" + transform + "deg)" + " translateX(-50%) rotateX(45deg)",
		    "-ms-transform": "skew(" + transform + "deg)" + " translateX(-50%) rotateX(45deg)",
		    "-o-transform": "skew(" + transform + "deg)" + " translateX(-50%) rotateX(45deg)",
		    "transform": "skew(" + transform + "deg)" + " translateX(-50%) rotateX(45deg)"
		});

		$(".box").css({
			"-webkit-transform": "translateX(-50%) rotateX(" + xBox + "deg) rotateY(" + yBox + "deg)",
			"-moz-transform": "translateX(-50%) rotateX(" + xBox + "deg) rotateY(" + yBox + "deg)",
			"-ms-transform": "translateX(-50%) rotateX(" + xBox + "deg) rotateY(" + yBox + "deg)",
			"-o-transform": "translateX(-50%) rotateX(" + xBox + "deg) rotateY(" + yBox + "deg)",
			"transform": "translateX(-50%) rotateX(" + xBox + "deg) rotateY(" + yBox + "deg)"
		});

		$(".middle").css({
			"-webkit-transform": "rotateY(" + page + "deg)",
			"-moz-transform": "rotateY(" + page + "deg)",
			"-ms-transform": "rotateY(" + page + "deg)",
			"-o-transform": "rotateY(" + page + "deg)",
			"transform": "rotateY(" + page + "deg)"
		});

		var bgLeft = "rgb(" + colorLeft + "," + colorLeft + "," + colorLeft + ")";
		var bgRight = "rgb(" + colorRight + "," + colorRight + "," + colorRight + ")";
		$(".left").css({
			"background": bgLeft,
			"box-shadow": " -10px 3px 5px -3px rgba(0, 0, 0, 0." + shadowLeft + ")"
		});
		$(".right").css({
			"background": bgRight,
			"box-shadow": "10px 3px 5px -3px rgba(0, 0, 0, 0." + shadowRight + ")"
		});
	}
})