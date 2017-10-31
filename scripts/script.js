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

 

         var $output = "";
   	
    	// Loop through each user to get data
    	$.each(users, function(key, val) {
    	  var $url = 'https://wind-bow.glitch.me/twitch-api/channels/' + users[key] + '?callback=?';
	      	$output += '<li>';

	    	$.getJSON($url, function(data) {
	    		
	    		$output += '<img src="' + data.logo +'">';
	    		console.log($output);
	    	if(data.stream === null){
	    		
	       	} else {

	        	}
	       

     	  	}); // getJSON
	   $output += '</li>';
    }); // Each loop


 			$('#results').html($output);
   });// document.ready