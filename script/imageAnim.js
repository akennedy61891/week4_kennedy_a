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

	// get a reference to the buttons at the bottom so we can change the puzzle
	let dropZones = document.querySelectorAll('.drop-zone');

	// functions go inthe middle 
	function createPuzzlePieces(pictureIndex) {
		//generate images here --> need to make 4 (top left, top right, bottom right, bottom left)
		//debugger;
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image"
				src="images/${piece + pictureIndex}.jpg" alt="puzzle piece" draggable>`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});
		
		initDrag();
	}
	// drag and drop functionality 
	// this is a 3-step process
	//1. handle the drag event
	//2. Handle the dragover event
	//3. handle the drop event
	//
	//dragging sets some data reference (an audio track name, image source, etc.)
	//dragover -> just prevent the default behavior
	//on a drop is where the magic happens -> script  that behaviour, get the data reference and do what you need to do with it

	function initDrag() {
		piecesBoard.querySelectorAll('img').forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log('draggin...');
				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}

	//handle the drop
	//
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged over me!');
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log('you dropped something on me');

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});

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
