barra_render = false;

$(document).ready(function(){

	$(document).trigger("scroll");
});

window.onresize = function(){
	reescalarFrames();
	$(document).trigger("scroll");
}

function reescalarFrames(){
	var frames = document.getElementsByTagName("iframe");
	for(var i = 0; i < frames.length - 1; i++){
		if(frames[i].clientWidth < 560){
			frames[i].height = frames[i].clientWidth*315/560;
		}
	}
}

$(window).on("orientationchange",function(){
	$(window).trigger("resize");
});
