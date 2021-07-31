

$(document).ready(function(){
	var html = localStorage.getItem("html") || "";
	var css = localStorage.getItem("css") || "";
	var js = localStorage.getItem("js") || "";
	var code = document.getElementById("code").contentWindow.document;
	
	document.getElementById("html").value = html;
	document.getElementById("css").value = css;
	document.getElementById("js").value = js;
	
	code.open();
	code.writeln(html+"<style>"+css+"</style>"+"<script>" + js + "</script>");
	code.close();
	
	function compile() {
	
		html = document.getElementById("html");
		css = document.getElementById("css");
		js = document.getElementById("js");
		code = document.getElementById("code").contentWindow.document;
		
		document.body.onkeyup = function(){
			code.open();
			code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
			code.close();
			localStorage.setItem("html", html.value);
			localStorage.setItem("css", css.value);
			localStorage.setItem("js", js.value);
		  };
		};
	
	compile();
	
	var mousedownFirst = false;
	var mousedownSecond = false;

	$(document).on("mousedown",".first", function(e){
	  mousedownFirst = true;
	});
	$(document).on("mousedown",".second", function(e){
	  mousedownSecond = true;
	});
	$(document).on("mouseup","#container", function(e){
	  mousedownFirst = false;
	  mousedownSecond = false;
	});
	$(document).on("mousemove","#container", function(e){
	  
	  parentOffset = $(this).offset();
	  
	  if(mousedownFirst){
		$(".first").css("left", e.pageX - parentOffset.left);
		$(".col1").css("width", e.pageX - parentOffset.left);
		$(".col2").css("left", e.pageX - parentOffset.left);      
	  }
	  if(mousedownSecond){
		$(".second").css("left", e.pageX - parentOffset.left);
		$(".col2").css("width", e.pageX - parentOffset.left);
		$(".col3").css("left", e.pageX - parentOffset.left);
	  }
	  
	});
	
  });
