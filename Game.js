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
		for (var i = 0; i < 22; i++) {
			var line = [];
			for (var j = 0; j < 10; j++) {
				line.push(0);
				drawBox(j, i, 0);
			}
			this.board.push(line);
		}
	},
	putBlockInBoard: function() {
		console.log("putBlockInBoard called");
		var shape = blockShapes[this.movingBlock.template].shape[this.movingBlock.orientation-1];
		var colorIndex = blockShapes[this.movingBlock.template].color;
		for (var x = 0; x < 4; x++) {
			for (var y = 0; y < 4; y++) {
				if (shape[y][x] == 1) {
					drawBox(x + this.movingBlock.posX, y + this.movingBlock.line, colorIndex);
				}
			}
		}
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
