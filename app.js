const key = document.querySelector('#input');

key.onclick = function go() {
	let secret = document.getElementById("phrase").value;

	if (secret === '123') {
		alert('Welcome to The Illuminati!');
		window.open('secret.html', '_self');

	}

}

