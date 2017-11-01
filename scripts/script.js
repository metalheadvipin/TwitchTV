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
         
   		var output = '';
    	// Loop through each user to get data
    	for (i = 0; i < users.length; i++) { 
    		
    		var $url = 'https://wind-bow.glitch.me/twitch-api/channels/' + users[i] + '?callback=?';
	     	
	    	$.getJSON($url, function(data) {
	    			console.log(data);
	    	if(data.status == null){
	    		if(data.logo == null){
	    		output += '<li><img src="images/noimage.png"><span class="status">' + data.display_name + ' is Offline</span></li>';

	       		}
	       		else {
	       		output += '<li><img src="' + data.logo +'"><span class="status">' + data.display_name + ' is Offline</span></li>'; 		  		   
	       		}
	    		// 
	          	} else {
	    		if(data.logo == null){
	    	 	output += '<li><img src="images/noimage.png"><span class="status">' + data.display_name + ' is Online</span><a href="' + data.url + '" target="_blank"><span class="stream">Stream</span></a></li>';
	    	 
	       		}
	       		else {
	        	 output += '<li><img src="' + data.logo +'"><span class="status">' + data.display_name + ' is Online</span><a href="' + data.url + '" target="_blank"<span class="stream">Stream</span></a></li>';		  		   
	        	 
	       		}
	    	}
    		
	       	// console.log($output);
	       	$('#results').html(output); 
	       	$('#loading').hide();
     	  }); // getJSON
			
    } // For loop

		
   });// document.ready