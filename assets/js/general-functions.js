/**
 * PATTR, 2015
 * General functions
 */


// Toggle class to open/close main menu
// Display none is used to avoid focus on keyboard when menu's closed

function menuControl() {
	var keyFSupp = document.implementation.hasFeature("keyframes", "1");
	
	var theMenu = document.getElementById('index');
	var theButton = document.getElementById('controler');
	theMenu.style.display = 'none';
	theButton.onclick = function() {
		if(keyFSupp) {theMenu.style.position = 'absolute';}
		
		if(theMenu.className == 'opened') {
			theMenu.removeAttribute('class');
			theMenu.style.display = 'none';
		} else {
			theMenu.className = 'opened';
			theMenu.style.display = 'block';
		}
	};
}
