(() => {
	console.log('js is linked up');

	

	//window.addEventListener('load', changeHeadline);

	function changeHeadline() {
		document.querySelector('h1').textContent = "Hey There";
		document.querySelector('p').textContent = "How's it goin?";
	}

	const theButton = document.querySelector('#buttonHolder img');

	theButton.addEventListener('click', changeHeadline);
	// set up the puzzle pieces and boards
	//



})();
