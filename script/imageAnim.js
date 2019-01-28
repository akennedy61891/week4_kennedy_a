(() => {
	console.log('js is linked up');

	//window.addEventListener('load', changeHeadline);

	//function changeHeadline() {
	//	document.querySelector('h1').textContent = "Hey There";
	//	document.querySelector('p').textContent = "How's it goin?";
	//}

	//const theButton = document.querySelector('#buttonHolder img');

	//theButton.addEventListener('click', changeHeadline);
	// set up the puzzle pieces and boards
	
	const thePieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"]; 

	// get a reference to the drag slide
	let piecesBoard = document.querySelector(".puzzle-pieces"); 
	let puzzleBoard = document.querySelector(".puzzle-board");

	//get a reference to the buttons at the bottom so we can change the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img"); 

	// functions go inthe middle 
	function createPuzzlePieces(pictureIndex) {
		//generate images here --> need to make 4 (top left, top right, bottom right, bottom left)
		//debugger;
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image"
				src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});
	}

	function resetPuzzlePieces() {
		//change the current puzzle, regenerate the pieces
		//debugger;
		piecesBoard.innerHTML = "";


		createPuzzlePieces(this.dataset.puzzleref);
	}

	// event handling goes here 
	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));

	createPuzzlePieces(0);

})();
