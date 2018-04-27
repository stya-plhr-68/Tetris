/* Functions refering to Sites design. */
var KeypressFunctions = [];
KeypressFunctions[37] = function _keypressLeftArrow() {
	console.log("Left arrow was pressed.");
}
KeypressFunctions['t'.charCodeAt(0)] = function _keypresst() {
	//do something specific for t
}
//you get the idea here

function keyListener(event){ 
	//whatever we want to do goes in this block
	event = event || window.event; //capture the event, and ensure we have an event
	var key = event.key || event.which || event.keyCode; //find the key that was pressed
	//MDN is better at this: https://developer.mozilla.org/en-US/docs/DOM/event.which
	KeypressFunctions[key].call(); //if there's a defined function, run it, otherwise don't
	//I also used .call() so you could supply some parameters if you wanted, or bind it to a specific element, but that's up to you.
}



















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



gameClicked();


