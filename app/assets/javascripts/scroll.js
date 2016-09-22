$(document).on("scroll", function(event) {
  var y = $(this).scrollTop();
  var ancho_act = Math.max(document.documentElement.clientWidth, window.innerWidth || document.body.ClientWidth || 0);
  var alto_logo = document.getElementById("div_logo").clientHeight;
  if (y > 200 || barra_render) {
		$("#forma-search").css("display", "none");
		//$("#div_logo").css({"height" : "0"});
		//$("#div_menu").css({"height" : "0"});
		$("#search-lat").removeAttr("style");
		$("#div_logo").css({"display" : "none"});
		$("#div_menu").css({"display" : "none"});
		$(".reajustable").removeAttr("style");
		$("#contenedor_nav").css({"min-height":"60px","background-color":"#fff","-webkit-box-shadow":"0 6px 12px rgba(0,0,0,0.175)","-moz-box-shadow":"0 6px 12px rgba(0,0,0,0.175)","box-shadow":"0 6px 12px rgba(0,0,0,0.175)"});
		$("#barra_nav").css({"height":"100%","background-color":"#fff", "width":"90%","margin": "0 auto"});
		$(".reajustable").css("display","inline-block");
		$("#logo-main").css({"display":"block","padding-left":""});
		if(ancho_act > 1165){
			$("#search-lat").css("display","none");
			$("#idioma-big-scroll").css("display","block");
			$("#idioma-small-scroll").removeAttr("style");
			$("#idioma-top").css("display","none");
			$(".mail").css("display","none");
			$(".intranet").css("display","none");	
			$(".borrable").css("display","none");
			$(".navbar-right").css("display","none");
			$("#header-links").css({"display":"inline-block", "background-color":"#fff", "padding-left":"0","float":"right" });
			$("#boton-top").css("display","block");
		}
		else{
			if(ancho_act < 768){
		 	$(".reajustable").css("width","100%");
			}
			else{
				$(".reajustable").removeAttr("style");
			}
			if(ancho_act > 1165){
				$("#idioma-big-scroll").css("display","block");
				$("#idioma-small-scroll").removeAttr("style");
			}
			else{
				$("#idioma-small-scroll").css("display","block");
				$("#idioma-big-scroll").removeAttr("style");
			}
			if(ancho_act < 435){
				$("#idioma-small-scroll").css("display","none");
			}
			else{
				$("#idioma-small-scroll").css("display", "block");
			}
			$("#idioma-top").css("display","none");
			$("#boton-top").css("display","block");
			$("#logo-main").css("padding-left", "10px");
			$(".uk-navbar-toggle").css({"line-height":"60px","padding":"0","float":"right", "margin-top":"0"});
			$("#barra_nav").css("width","100%");
			$(".mail").removeAttr("style");
			$(".intranet").removeAttr("style");
			$(".mail a").css("line-height","60px");
			$(".intranet a").css("line-height","60px");
			$(".borrable").removeAttr("style");
			$(".navbar-right").removeAttr("style");;
			$("#header-links").css("display", "none");
		}
  }
	else{
  	barra_render = false;
		if(ancho_act <= 1165){
			$("#search-lat").removeAttr("style");
			$("#forma-search").css("display","none");
		}
		else{
			$("#search-lat").css("display","none");
			$("#forma-search").removeAttr("style");
		}
		//$("#forma-busqueda").removeAttr("style");
		$("#idioma-big-scroll").removeAttr("style");
		$("#idioma-small-scroll").removeAttr("style");
		$("#idioma-top").removeAttr("style");
		$(".mail a").removeAttr("style");
		$(".intranet a").removeAttr("style");
		$("#boton-top").removeAttr("style");
		$(".reajustable").removeAttr("style");
		$(".uk-navbar-toggle").removeAttr("style");
		$("#contenedor_nav").removeAttr("style");
		$("#barra_nav").removeAttr("style");
		$(".reajustable").removeAttr("style");
		$("#logo-main").removeAttr("style");
		/*setTimeout(function(){
			$("#div_logo").css({"height" : ($("#img_logo").outerHeight() + "px")});
			$("#div_menu").css({"height" : "54px"});
		}, 50);*/
		$("#div_logo").removeAttr("style");
		$("#div_menu").removeAttr("style");
		$(".borrable").removeAttr("style");
		$(".mail").removeAttr("style");
		$(".intranet").removeAttr("style");
		$(".navbar-right").removeAttr("style");
		$("#header-links").removeAttr("style");
  }
  	ajustarCuerpo(y);
});

function ajustarCuerpo(scroll){
	var alto_footer = document.getElementById('div_footer').clientHeight;
	var alto_header = document.getElementById('header').clientHeight;
	$('#resto-cuerpo').css({'padding-bottom': (alto_footer+1)+'px', 'padding-top': (alto_header-1.5+(scroll > 200 ? 170 : 0))+'px'});
}

function regresarArriba(){
	$(document).scrollTop(0);
	$(document).trigger("scroll", [$(document).scrollTop()]);
}
