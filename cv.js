$(document).ready(function(){

//$(this).find(".details").show(400)
//	   .find(".container").show(800);




/*$(".details").on("mouseenter",function(){


	alert("this mouseenter works?!");



});*/

/*$(".work").on("click",function(){

	alert("the click works");

});*/

$(".company").on("click", function(){
	
	$(this).find(".container").toggle();
	
	
});


/*$(".work").on("click", function() {
	
	$(".company").find(".container").hide();
	
	//want to hide containers of each company but not the job title/company /					    //themselves necessarily
	
});*/
/*$(".company").on("mouseenter", function(){
	
	$(this).find(".container").show(400);
	
	
});

$(".details").on("mouseenter",function(){
	
	
	$(this).find(".container").show(400);
});*/


});