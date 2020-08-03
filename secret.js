function terminateSession() {
	if(confirm('Please terminate the session using the button at the bottom after recieving the instructions. Understood?')) {
		window.load;
	} else {
		window.open("index.html", '_self')
	}


	
}


function terminate() {
	alert("May you find the Freedom you deserve. Goodluck!");
	window.open("index.html", "_self");
}


const link = document.getElementById('map_img')

function image() {
	if(link.onclick) {
		window.open('file:///Users/temporary/Desktop/Underground_Railroads/UGRR.jpg', '_blank');
	}
}