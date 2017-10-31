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

 
         var output = '<ul>';

    	
    	// Loop through each user to get data
    	$.each(users, function(key, val) {
    	  var $url = 'https://wind-bow.glitch.me/twitch-api/streams/' + users[key] + '?callback=?';
	      	
	    	$.getJSON($url, function(data) {
	    
	    	if(data.stream === null){
	    		output += '<li>' + val + '</li>';
	    		console.log(output);
	       	} else {
	       		output += '<li>' + val + '</li>';
	        	}
	             console.log(output);
     	  	}); // getJSON

    }); // Each loop
    	  	 output += '</ul>';
 			$('#results').html(output);
   });// document.ready