
	 $(document).ready(function() {

		$( "#btnSound1" ).click(function() {
			playSound1();
		});
		$( "#btnSound2" ).click(function() {
			playSound2();
		});
		$( "#btnSound3" ).click(function() {
			playSound3();
		});
		$( "#btnSound4" ).click(function() {
			playSound4();
		});
		
		$( "#btnSound5" ).click(function() {
			playSound5();
		});
		$( "#btnSound6" ).click(function() {
			playSound6();
		});
		$( "#btnSound7" ).click(function() {
			playSound7();
		});
		$( "#btnSound8" ).click(function() {
			playSound8();
		});	
		
		sound();
	 });
	 
	 function playSound1(){
		if($("#audio1")[0].currentTime > 0){
				$("#audio1")[0].pause();
				$("#audio1")[0].currentTime = 0.0;
		}else{
			$("#audio1")[0].play();
		}
	 }
	 
	  function playSound2(){
		if($("#audio2")[0].currentTime > 0){
				$("#audio2")[0].pause();
				$("#audio2")[0].currentTime = 0.0;
		}else{
			$("#audio2")[0].play();
		}
	 }
	 
	  function playSound3(){
		if($("#audio3")[0].currentTime > 0){
				$("#audio3")[0].pause();
				$("#audio3")[0].currentTime = 0.0;
		}else{
			$("#audio3")[0].play();
		}
	 }
	 
	  function playSound4(){
		if($("#audio4")[0].currentTime > 0){
				$("#audio4")[0].pause();
				$("#audio4")[0].currentTime = 0.0;
		}else{
			$("#audio4")[0].play();
		}
	 }
	 
	  function playSound5(){
		if($("#playSound5")[0].currentTime > 0){
				$("#playSound5")[0].pause();
				$("#playSound5")[0].currentTime = 0.0;
		}else{
			$("#playSound5")[0].play();
		}
	 }
	 
	  function playSound6(){
		if($("#audio6")[0].currentTime > 0){
				$("#audio6")[0].pause();
				$("#audio6")[0].currentTime = 0.0;
		}else{
			$("#audio6")[0].play();
		}
	 }
	 
	  function playSound7(){
		if($("#audio7")[0].currentTime > 0){
				$("#audio7")[0].pause();
				$("#audio7")[0].currentTime = 0.0;
		}else{
			$("#audio7")[0].play();
		}
	 }
	 
	 function playSound8(){
		if($("#audio6")[0].currentTime > 0){
				$("#audio8")[0].pause();
				$("#audio8")[0].currentTime = 0.0;
		}else{
			$("#audio8")[0].play();
		}
	 }
	 
	 function sound(){
		jQuery(document).bind('keydown', 'alt+l',function (evt){playSound1(); return false; });
		jQuery(document).bind('keydown', 'alt+h',function (evt){playSound2(); return false; });
		jQuery(document).bind('keydown', 'alt+g',function (evt){playSound3(); return false; });
	 }
	 