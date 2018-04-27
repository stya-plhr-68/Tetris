var game = {
	board: [],
	movingBlock: {
		orientation: 1,  /* 1, 2, 3, 4 */
		template: 3,     /* Type of tetrinimo. */
		posX: 4,         /*  Position on x axis */
		line: 2,
		playable: true
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
	
	/* Generate a new Random Block. */
	generateNewBlock: function() {
		var randomTemplate = Math.floor(Math.random()) * 7;
		this.movingBlock.orientation = 1;
		this.movingBlock.template = randomTemplate;		
		this.movingBlock.posX = 4;
		this.movingBlock.line = 2;
		this.movingBlock.playable = true;
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
		for (var x = -1; x < 4; x++) 
		{
			for (var y = 0; y < 4; y++)
			{
				/* Borders */
				if(x + this.movingBlock.posX == 10 && shape[y][x] == 1)
					return false;
				if(x + this.movingBlock.posX == -1 && shape[y][x] == 1)
					return false;
				if(y + this.movingBlock.line == 22 && shape[y][x] == 1)
					return false;
				if(x > 0 && y + this.movingBlock.line < 22)
				{
					if(this.board[y + this.movingBlock.line][x + this.movingBlock.posX] == 1 && shape[y][x] == 1)
						return false;
				}
			}				
		}
		return true;
	},
	
	/* Move the block x axis ( x ) and y axis ( line ) */
	moveBlockAt: function(deltaX, deltaLine) {
		console.log("moveBlockAt called");	
		var tmp_posX = this.movingBlock.posX;
		var tmp_line = this.movingBlock.line;
		this.removeBlockFromBoard();
		this.movingBlock.posX += deltaX;
		this.movingBlock.line += deltaLine;	
		if(this.blockCanBePlacedAt() == true)
		{		
			this.putBlockInBoard();	
			return true;
		}		
		else
		{
			this.movingBlock.posX = tmp_posX;
			this.movingBlock.line = tmp_line;
			this.putBlockInBoard();
			return false;
		}
		console.log("moveBlockAt called");
				
	},
	
	/* Instantly places the block at the end of its course. */
	moveBlockToBottom: function() {		
		console.log("moveBlockToBottom called");
		this.removeBlockFromBoard();
		while(this.blockCanBePlacedAt() == true)
		{
			this.movingBlock.line++;
		}		
		this.movingBlock.line--;
		this.putBlockInBoard();		
	},
	
	/* Changes the orientaion of the block. */
	rotateBlock: function() {
		console.log("rotateBlock called");
		var tmp = this.movingBlock.orientation;
		this.removeBlockFromBoard();
		this.movingBlock.orientation++;
		
		if(this.movingBlock.orientation == 5)
			this.movingBlock.orientation = 1;
		
		console.log(this.blockCanBePlacedAt());
		if( this.blockCanBePlacedAt() == false ) {			
			this.movingBlock.orientation = tmp;
			this.putBlockInBoard();
			return false;;
		}		
		this.putBlockInBoard();
		return true;		
		
	},
	
	/* Checks if the moving block is still playable. */
	isPlayable: function() {
		if ( !this.moveBlockAt(-1, 0) && !this.moveBlockAt(1, 0) && !this.moveBlockAt(0, 1))
			return false;
		else if( !this.rotateBlock() )
			return false;
		else
			return true;
	},
		
	/* Waits for the next move */
	runGame: function() {
		console.log("runGame called");
		while(true)
		{
			window.setTimeout(this.defaultMove(), 1000);
		}			
		
	},
	
	/* Executes a function, after waiting a specified number of milliseconds. */
	askMove: function() {
		console.log("askMove called");
		document.addEventListener('keydown', function(event) {
		if (event.keyCode == 37) {      /*	LEFT ARROW	*/
			//
			moveLeft();
		}
		else if (event.keyCode == 39) { /*	RIGHT ARROW	*/
			//
			moveRight();
		}
		else if (event.keyCode == 38) { /*	UP ARROW	*/
			//
			changeOrientation();
		}
		else if (event.keyCode == 40) { /*	DOWN ARROW	*/
			//
			moveDown();
		}
		else if (event.keyCode == 13) { /* 	ENTER 		*/
			//
			dragDown();	
		}		
		else if (event.keyCode == 27) { /*	ESCAPE  	*/
			//
			//pauseGame();
		}
		
		
		/*=============================*/
	}, true);
	
	},
	
	defaultMove: function() {
		moveDown();
		this.isPlayable();
	}
		
}
