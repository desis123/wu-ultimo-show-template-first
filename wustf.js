 (function ($) {
    $(document).ready(function () {
		
	//alert(typeof passedData);
	$('.wu-setup').prepend("<div class='wu-setup-page-messages'></div>")

	
	var susignerr = getUrlParameter('susignerr');
	
	
	if (susignerr !== "" && susignerr === 'upgradePlan') {
		
		$('.wu-setup-page-messages').prepend("Template You Choose Belongs to Pro Plan , Please Choose Upgraded Plan");
		$('.plans').css({"flex-direction":  "reverse"});
	}
	
	
	$.each( passedData, function( key, value ) {
		//This is to hide , plans based on choosen template
	     	$('#plan-'+ value).hide();
     
    });

		
	//for pop
	
	
var steps_length = $('ol li').length;

var active_index = $('ol li').filter('.active').index()+1;

console.log(steps_length);
console.log(active_index);
	
var step = getUrlParameter('step');


if(steps_length === active_index){
	


	
	
	

	
	$("#wp-submit").on('click',function(){
		//if All Goes Allright this works
		
			
	var userName = $("#user_name").val();
	var userEmail = $("#user_email").val();
	var userPass = $("#user_pass").val();
	var userPassConf = $("#user_pass_conf").val();
	var errLength = $(".error").length;
	
	console.log(isEmail(userEmail));
	
//if(isEmail(userEmail) && userPass !=='' && userPassConf !=='' &&  userName !==''){	

   setTimeout(function(){
		
$.magnificPopup.open({
  items: {
	src: '<div class="white-popup-block"><div id="spinningSquaresG"><div id="spinningSquaresG_1" class="spinningSquaresG"></div><div id="spinningSquaresG_2" class="spinningSquaresG"></div><div id="spinningSquaresG_3" class="spinningSquaresG"></div><div id="spinningSquaresG_4" class="spinningSquaresG"></div><div id="spinningSquaresG_5" class="spinningSquaresG"></div><div id="spinningSquaresG_6" class="spinningSquaresG"></div><div id="spinningSquaresG_7" class="spinningSquaresG"></div><div id="spinningSquaresG_8" class="spinningSquaresG"></div></div><div class="type-wrap"><span id="typed2" style="white-space:pre;"></span></div></div>',
    type: 'inline',
	},
	modal:true
  
});






var typed2 = new Typed('#typed2', {
	
    strings: [
	"Sit Back and Relax !! Your site is getting <b><i>Ready</i></b>",
	"Why Ordershop: It's <i>Simple , But Powerful</i> ",
	"Why Ordershop: It's <i>Blazing Fast</i> ",
	"Why Ordershop: It's <i>Hassle Free</i> ",
	"Why Ordershop: No <i>Coding Required</i> ",
	"Why Ordershop: No <i>Need Maintain Server</i> ",
	"Why Ordershop: No <i>Need Maintain Server</i> ",
	"Hurray !! Databse has been <b><i>Created</i></b>", 
	"With Ordershop You wil Get: <i>Always Professional Help</i> ",
	"With Ordershop You wil Get: <i>Powerful CRM</i> ",
	"With Ordershop You wil Get: <i>Boost Sale Support</i> ",
	"With Ordershop You wil Get: <i>Business Advices</i> ",
	"Almost Ready !! Configurating Your Site " 
	
	

	],
    typeSpeed: 100,
    backSpeed: 50,
	backDelay: 1000,
    startDelay: 1000,
	smartBackspace: true, // this is a default
   
    //fadeOut: true,
	loop: true
  });
  
  

}, 1000);



//} //email checked


		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	console.log($(".error").length);
	
	console.log('on account page');

} //steps checked

	
	

	
	
	
        		
  });
  })(jQuery);
  
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};


function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
  
  