var printSomething = 

var game = {
	board: [],
	movingBlock: {
		orientation: 1,
		template: 1,
		posX: 5,
		line: 2
	},
	initBoard: function() {
		console.log("initBoard called");
	},
	putBlockInBoard: function() {
		console.log("putBlockInBoard called");
	},
	removeBlockFromBoard: function() {
		console.log("removeBlockFromBoard called");
	},
	blockCanBePlacedAt: function(x, line) {
		console.log("blockCanBePlacedAt called");
	},
	moveBlockAt: function(x, line) {
		console.log("moveBlockAt called");
	},
	moveBlockBy: function(deltaX, deltaLines) {
		console.log("moveBlockBy called");
		moveBlockAt(this.movingBlock.posX + deltaX, this.movingBlock.line + deltaLines);
	},
	moveBlockToBottom: function() {
		console.log("moveBlockToBottom called");
	},
	rotateBlock: function() {
		console.log("rotateBlock called");
	}
}
