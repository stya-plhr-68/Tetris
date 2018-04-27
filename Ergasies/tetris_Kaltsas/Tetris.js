/* Functions refering to Sites design. */
function setVisibility(elementId, visible) {
	if (visible) {
		document.getElementById(elementId).style.display = "block";
	} else {
		document.getElementById(elementId).style.display = "none";
	}
}

function toggleVisibility(elementId) {
    var x = document.getElementById(elementId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function helpClicked() {
	console.log("help clicked");
	setVisibility("gamepage", false);
	setVisibility("helppage", true);
}

function gameClicked() {
	console.log("help clicked");
	setVisibility("gamepage", true);
	setVisibility("helppage", false);
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
	if(game.blockCanBePlacedAt() == true)
	{
		game.putBlockInBoard();
	}
		
	
	
}

function printBoard() {
	str = ""
	for (var i = 0; i < 22; i++) {			
			for (var j = 0; j < 10; j++) {
				str = str + " " + this.game.board[i][j];
			}			
			str = str + "\n";
	}
	window.alert(str);
}

function moveDown() {	
	game.removeBlockFromBoard();
	game.moveBlockAt(0,1);
	game.putBlockInBoard();	
}
function moveRight() {
	game.removeBlockFromBoard();
	game.moveBlockAt(1,0);
	game.putBlockInBoard();	
}
function moveLeft() {
	game.removeBlockFromBoard();
	game.moveBlockAt(-1,0);
	game.putBlockInBoard();
}
function changeOrientation(){
	game.removeBlockFromBoard();
	game.rotateBlock();
	game.putBlockInBoard();
}
gameClicked();


