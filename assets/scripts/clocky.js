function updateClock () { 
 	let currentTime = new Date ();
  	let currentHours = currentTime.getHours ( );
  	let currentMinutes = currentTime.getMinutes ( );
  	let currentSeconds = currentTime.getSeconds ( );

  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  	let timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

  	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
 
   	$(".time").html(currentTimeString);
}