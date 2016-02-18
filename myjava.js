var singleRide;
var monthlyCard;


function calculate(){
	singleRide = document.getElementById("subway").value;
	monthlyCard = singleRide * 4;
	alert("You ride "+
	monthlyCard+
	" times per month");
	shouldYou();
}
	
	function shouldYou(){
		if (monthlyCard > 43){
			alert("Purchase a monthly pass! You're spending too much money.");
		}
		else { 
			alert("Keep doing what you're doing. No need to buy a monthly pass.")
	}


}