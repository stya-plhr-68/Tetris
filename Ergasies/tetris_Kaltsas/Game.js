var game = {
	board: [],
	movingBlock: {
		orientation: 1,  /* 1, 2, 3, 4 */
		template: 1,     /* Type of tetrinimo. */
		posX: 5,         /*  Position on x axis */
		line: 2
	},
	/* Initialiazes the games board. */
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
	
	/* Draws the block( 5x5 ) into the board. */
	putBlockInBoard: function() {
		console.log("putBlockInBoard called");
		var shape = blockShapes[this.movingBlock.template].shape[this.movingBlock.orientation-1];
		var colorIndex = blockShapes[this.movingBlock.template].color;
		for (var x = 0; x < 4; x++) {
			for (var y = 0; y < 4; y++) {
				if (shape[y][x] == 1) {
					drawBox(x + this.movingBlock.posX, y + this.movingBlock.line, colorIndex);
					this.board[y + this.movingBlock.line][x + this.movingBlock.posX] = 1;
				}
			}
		}
	},	
	
	/* Erases the block( 5x5 ) at the board. */
	removeBlockFromBoard: function() {
		console.log("removeBlockFromBoard called");
		var shape = blockShapes[this.movingBlock.template].shape[this.movingBlock.orientation-1];	
		var colorIndex = 0;		
		for (var x = 0; x < 4; x++) {
			for (var y = 0; y < 4; y++) {
				if (shape[y][x] == 1) {
					drawBox(x + this.movingBlock.posX, y + this.movingBlock.line, colorIndex);
					this.board[y + this.movingBlock.line][x + this.movingBlock.posX] = 0;
				}
			}
		}
	},	
	
	/* Check to see if a block can be placed at a specific set of blocks. */
	blockCanBePlacedAt: function() {
		console.log("blockCanBePlacedAt called");		
		var shape = blockShapes[this.movingBlock.template].shape[this.movingBlock.orientation-1];		
		for (var x = 0; x < 4; x++) 
		{
			for (var y = 0; y < 4; y++)
			{
				if(x + this.movingBlock.posX > 10 || x + this.movingBlock.posX < -1 || y + this.movingBlock.line > 22)
					return false;
				console.log(shape[y][x] == 1 && shape[y][x] == this.board[y + this.movingBlock.line][x + this.movingBlock.posX]);
				if(shape[y][x] == 1 && shape[y][x] == this.board[y + this.movingBlock.line][x + this.movingBlock.posX])
				{
					console.log("called");
					return false;
				}
			}
		}
		return true;
	},
	
	/* Move the block x axis ( x ) and y axis ( line ) */
	moveBlockAt: function(x, line) {
		console.log("moveBlockAt called");	
		this.movingBlock.posX += x;
		this.movingBlock.line += line;	
		if(this.blockCanBePlacedAt() == true)
		{			
			return 1;
		}		
		else
		{
			this.movingBlock.posX -= x;
			this.movingBlock.line -= line;	
		}
		console.log("moveBlockAt called");
		return -1;		
	},
	
	/* Instantly places the block at the end of its course. */
	moveBlockToBottom: function() {
		
		console.log("moveBlockToBottom called");
		while(this.blockCanBePlacedAt() == true)
		{
			this.movingBlock.line++;
		}		
		this.putBlockInBoard();		
	},
	
	/* Changes the orientaion of the block. */
	rotateBlock: function() {
		console.log("rotateBlock called");
		if(this.blockCanBeRotated() == true) {			
			console.log(this.movingBlock.orientation);
			if(this.movingBlock.orientation == 4)
			{
				this.movingBlock.orientation = 1;
				return;
			}
			
			
			this.movingBlock.orientation++;
		}
	},
	
	/* Checks to see if the moving block can be rotated. */
	blockCanBeRotated: function() {
		this.movingBlock.orientaion++;		
		var shape = blockShapes[this.movingBlock.template].shape[this.movingBlock.orientation-1];		
		for (var x = 0; x < 4; x++) 
		{
			for (var y = 0; y < 4; y++)
			{
				if(x + this.movingBlock.posX > 10 || x + this.movingBlock.posX < -1 || y + this.movingBlock.line > 21)
				{
					this.movingBlock.orientaion--;
					return false;
				}
					
				console.log(shape[y][x] == 1 && shape[y][x] == this.board[y + this.movingBlock.line][x + this.movingBlock.posX]);
				if(shape[y][x] == 1 && shape[y][x] == this.board[y + this.movingBlock.line][x + this.movingBlock.posX])
				{
					console.log("called");
					this.movingBlock.orientaion--;
					return false;
				}
			}
		}
		this.movingBlock.orientaion--;
		return true;
	},
	
	
}
