$(document).ready(function(){
	// Array of Users who regularly stream on Twitch
	var users = [
					"ESL_SC2",
					"OgamingSC2",
					"cretetion",
					"freecodecamp",
					"storbeck",
					"habathcx",
					"RobotCaleb",
					"noobs2ninjas"
				];

 
     var $url = 'https://wind-bow.glitch.me/twitch-api/streams/shiphtur?callback=?';
    	
    	$.getJSON($url, function(data) {
    		console.log(data);
       	});
    

   });