$(document).ready(function(){

//regex 
var fullNamesReg=/^[a-zA-Z ]{3,100}$/;
var emailReg=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
var contactReg=/^[0-9]{10,10}$/;
var check=1;
//regex
//var passwordexp=/^[a-zA-Z0-9\#\,\.\*\$ ]{8,250}$/;

$("#fullNames").on("keypress keydown keyup", function(){
 var fullNames=$("#fullNames").val();
 if(!fullNames.match(fullNamesReg)){
 	$(".fullNameError").fadeIn();
 	check=0;
 }else{
 	$(".fullNameError").fadeOut();
 	check=1;
 }
 });

//validating the email
$("#email").on('keyup keydown keypress',function(){
	var email=$("#email").val();

	//check if this field matches the expression
	if(!email.match(emailReg)){
		$(".emailError").fadeIn()
		check=0;
	}else{
		$(".emailError").fadeOut();
		check=1;
	}	

});
//validating the contacts
$("#contact").on('keyup keydown keypress',function(){
	var contact=$("#contact").val();
		if(!contact.match(contactReg)){
		$(".contactError").fadeIn()
		check=0;
	}else{
		$(".contactError").fadeOut();
		check=1;
	}

	
});

setInterval(cheki,1000);//NB set timerInterval will wait for the whole entry rather than indivdual 

function cheki(){
	if (check=="0"){
		document.getElementById("submitBtn").style.display="none";
	}else{
		document.getElementById("submitBtn").style.display="inline-block";
	}
}
});





