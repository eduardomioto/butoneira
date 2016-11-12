
	 $(document).ready(function() {

		$( 'img[id^="btnSound"]' ).click(function() { 
			var refId = $(this).attr('id').match(/\d+/)[0];
			var audioId = "#audio" + refId; 
			playSound(audioId)
		;});	
		
		sound();
	 });
	 
	 function showHelp(){
		generate('information', $(".help").html());
	 }
	 
	 function showTitles(){
		if($(".row p").is(':visible')) {
			$(".row p").hide()
		}else{
			$(".row p").show()
		}
	 }
	 
	 function playSound(audioId){
    	console.log(audioId)
		if($(audioId)[0].currentTime > 0){
			$(audioId)[0].pause();
			$(audioId)[0].currentTime = 0.0;
		}else{
			$(audioId)[0].play();
		}
	 }
	 
	 function sound(){
		jQuery(document).bind('keydown', 'ctrl+h',function (evt){showHelp(); return false; });
		jQuery(document).bind('keydown', 'ctrl+i',function (evt){showTitles(); return false; });
		
		jQuery(document).bind('keydown', 'alt+p',function (evt){playSound("#audio1"); return false; });
		jQuery(document).bind('keydown', 'alt+h',function (evt){playSound("#audio2"); return false; });
		jQuery(document).bind('keydown', 'alt+g',function (evt){playSound("#audio3"); return false; });
		jQuery(document).bind('keydown', 'alt+x',function (evt){playSound("#audio4"); return false; });
		jQuery(document).bind('keydown', 'alt+b',function (evt){playSound("#audio5"); return false; });
		jQuery(document).bind('keydown', 'alt+9',function (evt){playSound("#audio6"); return false; });
		
		jQuery(document).bind('keydown', 'alt+n',function (evt){playSound("#audio7"); return false; });
		jQuery(document).bind('keydown', 'alt+r',function (evt){playSound("#audio8"); return false; });
		jQuery(document).bind('keydown', 'alt+j',function (evt){playSound("#audio9"); return false; });
		jQuery(document).bind('keydown', 'alt+1',function (evt){playSound("#audio10"); return false; });
		jQuery(document).bind('keydown', 'alt+8',function (evt){playSound("#audio11"); return false; });
		jQuery(document).bind('keydown', 'alt+3',function (evt){playSound("#audio12"); return false; });
		
		jQuery(document).bind('keydown', 'alt+4',function (evt){playSound("#audio13"); return false; });
		jQuery(document).bind('keydown', 'alt+z',function (evt){playSound("#audio14"); return false; });
		jQuery(document).bind('keydown', 'alt+2',function (evt){playSound("#audio15"); return false; });
		jQuery(document).bind('keydown', 'alt+0',function (evt){playSound("#audio16"); return false; });	
		jQuery(document).bind('keydown', 'alt+e',function (evt){playSound("#audio17"); return false; });	
		jQuery(document).bind('keydown', 'alt+m',function (evt){playSound("#audio18"); return false; });	
		
	 }
	 
	 
	 function generate(type, text) {

         var n = noty({
             text        : text,
             type        : type,
             dismissQueue: true,
             layout      : 'topRight',
             closeWith   : ['click'],
             theme       : 'relax',
             maxVisible  : 10,
             animation   : {
                 open  : 'animated bounceInRight',
                 close : 'animated bounceOutRight',
                 easing: 'swing',
                 speed : 500
             }
         });
     }

     $(document).ready(function () {
         
     });
	 