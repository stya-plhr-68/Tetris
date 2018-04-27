/*
	pages: Ένας πίνακας από τα div που είναι οι σελίδες της εφαρμογής
*/
var pages = [
	document.getElementById("gamepage"),
	document.getElementById("forumpage"),
	document.getElementById("optionspage"),
	document.getElementById("versionspage"),
	document.getElementById("helppage")
];

/*
	which: Ένας αριθμός από το 0 έως το μέγεθος του πίνακα pages
*/
function setVisiblePage(which) {
	for (var i = 0; i < pages.length; i++) {
		pages[i].style.display = "none";
	}
	pages[which].style.display = "block";
}

function testclick() {
	var x = Math.floor(Math.random() * 7);
	var y = Math.floor(Math.random() * 17);
	var c = Math.floor(Math.random() * 7);
	var o = Math.floor(Math.random() * 4 + 1);
	game.movingBlock = {
		orientation: o,
		template: c,
		posX: x,
		line: y
	};
	game.putBlockInBoard();
}

function printBoard() {
	var str = ""
	for (var i = 0; i < 22; i++) {			
			for (var j = 0; j < 10; j++) {
				str = str + " " + this.game.board[i][j];
			}			
			str = str + "\n";
	}
	return str;
}

function moveDown() {		
	game.moveBlockAt(0,1);	
	console.log(printBoard());
}
function moveRight() {	
	game.moveBlockAt(1,0);	
	console.log( printBoard() );
}
function moveLeft() {	
	game.moveBlockAt(-1,0);
	console.log(printBoard());
}
function changeOrientation(){	
	game.rotateBlock();
	console.log(printBoard());	
}

function dragDown(){
	game.moveBlockToBottom();
	console.log(printBoard());
}


setVisiblePage(0);

