

function I(){

	this.orientation = 1;                    /* There are 4 possible orientations */
	this.colour = "cyan";				
	this.posX = 5;							 /* Position of its center */
	this.line = 2;
	this.onPlay = true;
	
	this.UpdatedPos = function (matrix) {
	
		if ( this.orientation == 1 ) 
		{
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX+1] = 1;
			matrix[this.line][this.posX+2] = 1;
		}
		else if ( this.orientation == 2 )
		{
			matrix[this.line-1][this.posX] = 1;
			matrix[this.line][this.posX] = 1;
			matrix[this.line+1][this.posX] = 1;
			matrix[this.line+2][this.posX] = 1;
		}
		else if ( this.orientation == 3 )
		{
			matrix[this.line][this.posX-2] = 1;
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX+1] = 1;
		}
		else
		{
			matrix[this.line-2][this.posX] = 1;
			matrix[this.line-1][this.posX] = 1;
			matrix[this.line][this.posX] = 1;
			matrix[this.line+1][this.posX] = 1;
		}
	}
	this.ChangeOrientation = function () {
		this.orientation++;
	}
	this.MoveNextLine = function () {
		this.line++;
	}
	this.EraseCurrentPos = function (matrix) {
		if ( this.orientation == 1 ) 
		{
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX+1] = 0;
			matrix[this.line][this.posX+2] = 0;
		}
		else if ( this.orientation == 2 )
		{
			matrix[this.line-1][this.posX] = 0;
			matrix[this.line][this.posX] = 0;
			matrix[this.line+1][this.posX] = 0;
			matrix[this.line+2][this.posX] = 0;
		}
		else if ( this.orientation == 3 ) 
		{
			matrix[this.line][this.posX-2] = 0;
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX+1] = 0;
		}
		else
		{
			matrix[this.line-2][this.posX] = 0;
			matrix[this.line-1][this.posX] = 0;
			matrix[this.line][this.posX] = 0;
			matrix[this.line+1][this.posX] = 0;
		}
	}
	this.MoveRight == function () {		
		if ( this.CanMoveRight() )
		{
			this.posX++;
		}
		else
		{
			return;
		}
	}
	this.MoveLeft == function () {
		if ( this.CanMoveLeft () )
		{
			this.posX--;
		}
		else
		{
			return;
		}		
	}
	this.IsOnPlay = function () {
		if ( (this.orientation == 1 || this.orientation == 3) && this.line == 21 ) 
		{
			return false;
		}
		else if ( this.orientation == 2 && this.line == 19 )
		{
			return false;
		}
		else if ( this.orientation == 4 && this.line == 20 )
		{
			return false;
		}
		else
		{
			return true;
		}			
	}
	this.CanMoveRight = function () {
		if ( this.orientation == 1 && this.posX == 7 )
		{
			return false;
		}
		else if ( ( this.orientation == 2 || this.orientation == 4) && this.posX == 9 )
		{
			return false;
		}
		else if ( this.orientation == 3 && this.posX == 8 )
		{
			return false;
		}		
		else
		{
			return true;	
		}			
	}
	this.CanMoveLeft = function () {	
	
		if ( this.orientation == 1 && this.posX == 1 )
		{
			return false;
		}
		else if ( ( this.orientation == 2 || this.orientation == 4) && this.posX == 0 )
		{
			return false;
		}
		else if ( this.orientation == 3 && this.posX == 2 )
		{
			return false;
		}
		else
		{
			return true;	
		}			
	}
	// this.IsNotBlocked = function (choice) {
		// /* Choices : 1 --> Move down || 2 --> Move left || 3 --> Move right || 4 --> Rorate */
		// if ( choice == 1 && this.orientation == 1 )
			// if ( matrix[this.line+1][this.posX-1] != 1 &&
				 // matrix[t]						)
			
	// }
}

function J(){
	this.orientation = 1;                    /* There are 4 possible orientations */
	this.colour = "blue";				
	this.posX = 5;							 /* Position of its center */
	this.line = 3;
	this.onPlay = true;
	
	this.UpdatedPos = function (matrix) {
	
		if ( this.orientation == 1 ) 
		{
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX+1] = 1;
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line-1][this.posX-1] = 1;
		}
		else if ( this.orientation == 2 )
		{
			matrix[this.line][this.posX] = 1;
			matrix[this.line-1][this.posX] = 1;
			matrix[this.line-1][this.posX+1] = 1;
			matrix[this.line+1][this.posX] = 1;
		}
		else if ( this.orientation == 3 )
		{
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line][this.posX+1] = 1;
			matrix[this.line+1][this.posX+1] = 1;
		}
		else
		{
			matrix[this.line-1][this.posX] = 1;
			matrix[this.line][this.posX] = 1;
			matrix[this.line+1][this.posX-1] = 1;
			matrix[this.line+1][this.posX] = 1;
		}
	}
	this.ChangeOrientation = function () {
		this.orientation++;
	}
	this.MoveNextLine = function () {
		this.line++;
	}
	this.EraseCurrentPos = function (matrix) {
		if ( this.orientation == 1 ) 
		{
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX+1] = 0;
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line-1][this.posX-1] = 0;
		}
		else if ( this.orientation == 2 )
		{
			matrix[this.line][this.posX] = 0;
			matrix[this.line-1][this.posX] = 0;
			matrix[this.line-1][this.posX+1] = 0;
			matrix[this.line+1][this.posX] = 0;
		}
		else if ( this.orientation == 3 )
		{
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line][this.posX+1] = 0;
			matrix[this.line+1][this.posX+1] = 0;
		}
		else
		{
			matrix[this.line-1][this.posX] = 0;
			matrix[this.line][this.posX] = 0;
			matrix[this.line+1][this.posX-1] = 0;
			matrix[this.line+1][this.posX] = 0;
		}
	}
	this.MoveRight == function () {		
		if ( this.CanMoveRight() )
		{
			this.posX++;
		}
		else
		{
			return;
		}
	}
	this.MoveLeft == function () {
		if ( this.CanMoveLeft () )
		{
			this.posX--;
		}
		else
		{
			return;
		}	
	}
	this.IsOnPlay = function () {
		if ( this.orientation == 1 && this.line == 21 ) 
		{
			return false;
		}
		else if ( (this.orientation == 2 || this.orientation == 3 || this.orientation == 4) && this.line == 20 )
		{
			return false;
		}		
		else
		{
			return true;
		}			
	}
	this.CanMoveRight = function () {
		if ( (this.orientation == 1 || this.orientation == 2 || this.orientation == 3) && this.posX == 8 )
		{
			return false;
		}
		else if ( this.orientation == 4 && this.posX == 9 )
		{
			return false;
		}		
		else
		{
			return true;	
		}			
	}
	this.CanMoveLeft = function () {
		if ( (this.orientation == 1 || this.orientation == 4 || this.orientation == 3) && this.posX == 1 )
		{
			return false;
		}
		else if ( this.orientation == 2 && this.posX == 0 )
		{
			return false;
		}		
		else
		{
			return true;	
		}			
	}
}

function L(){
	this.orientation = 1;                    /* There are 4 possible orientations */
	this.colour = "orange";				
	this.posX = 5;							 /* Position of its center */
	this.line = 3;
	this.onPlay = true;
	
	this.UpdatedPos = function (matrix) {
	
		if ( this.orientation == 1 ) 
		{
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX+1] = 1;
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line-1][this.posX+1] = 1;
		}
		else if ( this.orientation == 2 )
		{
			matrix[this.line][this.posX] = 1;
			matrix[this.line-1][this.posX] = 1;
			matrix[this.line+1][this.posX+1] = 1;
			matrix[this.line+1][this.posX] = 1;
		}
		else if ( this.orientation == 3 )
		{
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line][this.posX+1] = 1;
			matrix[this.line+1][this.posX-1] = 1;
		}
		else
		{
			matrix[this.line+1][this.posX] = 1;
			matrix[this.line][this.posX] = 1;
			matrix[this.line+1][this.posX-1] = 1;
			matrix[this.line+1][this.posX] = 1;
		}
	}
	this.ChangeOrientation = function () {
		this.orientation++;
	}
	this.MoveNextLine = function () {
		this.line++;
	}
	this.EraseCurrentPos = function (matrix) {
		if ( this.orientation == 1 ) 
		{
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX+1] = 0;
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line-1][this.posX+1] = 0;
		}
		else if ( this.orientation == 2 )
		{
			matrix[this.line][this.posX] = 0;
			matrix[this.line-1][this.posX] = 0;
			matrix[this.line+1][this.posX+1] = 0;
			matrix[this.line+1][this.posX] = 0;
		}
		else if ( this.orientation == 3 )
		{
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line][this.posX+1] = 0;
			matrix[this.line+1][this.posX-1] = 0;
		}
		else
		{
			matrix[this.line+1][this.posX] = 0;
			matrix[this.line][this.posX] = 0;
			matrix[this.line+1][this.posX-1] = 0;
			matrix[this.line+1][this.posX] = 0;
		}
	}
	this.MoveRight == function () {		
		if ( this.CanMoveRight() )
		{
			this.posX++;
		}
		else
		{
			return;
		}
	}
	this.MoveLeft == function () {
		if ( this.CanMoveLeft () )
		{
			this.posX--;
		}
		else
		{
			return;
		}	
	}
	this.IsOnPlay = function () {
		if ( this.orientation == 1 && this.line == 21 ) 
		{
			return false;
		}
		else if ( (this.orientation == 2 || this.orientation == 3 || this.orientation == 4) && this.line == 20 )
		{
			return false;
		}		
		else
		{
			return true;
		}				
	}
	this.CanMoveRight = function () {
		if ( (this.orientation == 1 || this.orientation == 2 || this.orientation == 3) && this.posX == 8 )
		{
			return false;
		}
		else if ( this.orientation == 4 && this.posX == 9 )
		{
			return false;
		}		
		else
		{
			return true;	
		}			
	}
	this.CanMoveLeft = function () {
		if ( (this.orientation == 1 || this.orientation == 4 || this.orientation == 3) && this.posX == 1 )
		{
			return false;
		}
		else if ( this.orientation == 2 && this.posX == 0 )
		{
			return false;
		}		
		else
		{
			return true;	
		}			
	}
}

function O(){
	
	this.colour = "yellow";
	this.posX = 5;
	this.line = 3;
	this.onPlay = true;
	
	this.UpdatedPos = function (matrix) {
		matrix[this.line][this.posX] = 1;
		matrix[this.line][this.posX+1] = 1;
		matrix[this.line-1][this.posX] = 1;
		matrix[this.line-1][this.posX+1] = 1;
	}
	this.MoveNextLine = function () {
		this.line++;
	}
	this.EraseCurrentPos = function (matrix) {
		matrix[this.line][this.posX] = 0;
		matrix[this.line][this.posX+1] = 0;
		matrix[this.line-1][this.posX] = 0;
		matrix[this.line-1][this.posX+1] = 0;
	}
	this.MoveRight == function () {		
		if ( this.CanMoveRight() )
		{
			this.posX++;
		}
		else
		{
			return;
		}
	}
	this.MoveLeft == function () {
		if ( this.CanMoveLeft () )
		{
			this.posX--;
		}
		else
		{
			return;
		}		
	}
	this.IsOnPlay = function () {
		if ( this.line == 21 )
		{
			return false;
		}
		else
		{
			return true;
		}		
	}
	this.CanMoveRight = function () {
		if ( this.posx == 8 )
		{
			return false;
		}			
		else
		{
			return true;
		}
	}
	this.CanMoveLeft = function () {
		if ( this.posx == 0 )
		{
			return false;
		}			
		else
		{
			return true;
		}	
	}
	
}

function S(){
	this.orientation = 1;                    /* There are 4 possible orientations */
	this.colour = "green";				
	this.posX = 5;							 /* Position of its center */
	this.line = 3;
	this.onPlay = true;
	
	this.UpdatedPos = function (matrix) {
	
		if ( this.orientation == 1 ) 
		{
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line-1][this.posX] = 1;
			matrix[this.line-1][this.posX+1] = 1;
		}
		else if ( this.orientation == 2 )
		{
			matrix[this.line-1][this.posX] = 1;
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX+1] = 1;
			matrix[this.line+1][this.posX+1] = 1;
		}
		else if ( this.orientation == 3 )
		{
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX+1] = 1;
			matrix[this.line+1][this.posX] = 1;
			matrix[this.line+1][this.posX-1] = 1;
		}
		else
		{
			matrix[this.line-1][this.posX-1] = 1;
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line+1][this.posX] = 1;
		}
	}
	this.ChangeOrientation = function () {
		this.orientation++;
	}
	this.MoveNextLine = function () {
		this.line++;
	}
	this.EraseCurrentPos = function (matrix) {
		if ( this.orientation == 1 ) 
		{
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line+1][this.posX] = 0;
			matrix[this.line+1][this.posX+1] = 0;
		}
		else if ( this.orientation == 2 )
		{
			matrix[this.line+1][this.posX] = 0;
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX+1] = 0;
			matrix[this.line+1][this.posX+1] = 0;
		}
		else if ( this.orientation == 3 )
		{
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX+1] = 0;
			matrix[this.line+1][this.posX] = 0;
			matrix[this.line+1][this.posX-1] = 0;
		}
		else
		{
			matrix[this.line-1][this.posX-1] = 0;
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line+1][this.posX] = 0;
		}
	}
	this.MoveRight == function () {		
		if ( this.CanMoveRight() )
		{
			this.posX++;
		}
		else
		{
			return;
		}
	}
	this.MoveLeft == function () {
		if ( this.CanMoveLeft () )
		{
			this.posX--;
		}
		else
		{
			return;
		}	
	}
	this.IsOnPlay = function () {
		if ( this.orientation == 1 && this.line == 21 ) 
		{
			return false;
		}
		else if ( (this.orientation == 2 || this.orientation == 3 || this.orientation == 4) && this.line == 20 )
		{
			return false;
		}		
		else
		{
			return true;
		}				
	}
	this.CanMoveRight = function () {
		if ( (this.orientation == 1 || this.orientation == 2 || this.orientation == 3) && this.posX == 8 )
		{
			return false;
		}
		else if ( this.orientation == 4 && this.posX == 9 )
		{
			return false;
		}		
		else
		{
			return true;	
		}			
	}
	this.CanMoveLeft = function () {
		if ( (this.orientation == 1 || this.orientation == 4 || this.orientation == 3) && this.posX == 1 )
		{
			return false;
		}
		else if ( this.orientation == 2 && this.posX == 0 )
		{
			return false;
		}		
		else
		{
			return true;	
		}			
	}
}

function Z(){
	this.orientation = 1;                    /* There are 4 possible orientations */
	this.colour = "red";				
	this.posX = 5;							 /* Position of its center */
	this.line = 3;
	this.onPlay = true;
	
	this.UpdatedPos = function (matrix) {
	
		if ( this.orientation == 1 ) 
		{
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX+1] = 1;
			matrix[this.line-1][this.posX] = 1;
			matrix[this.line-1][this.posX-1] = 1;
		}
		else if ( this.orientation == 2 )
		{
			matrix[this.line-1][this.posX+1] = 1;
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX+1] = 1;
			matrix[this.line+1][this.posX] = 1;
		}
		else if ( this.orientation == 3 )
		{
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line+1][this.posX] = 1;
			matrix[this.line+1][this.posX+1] = 1;
		}
		else
		{
			matrix[this.line-1][this.posX] = 1;
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line+1][this.posX-1] = 1;
		}
	}
	this.ChangeOrientation = function () {
		this.orientation++;
	}
	this.MoveNextLine = function () {
		this.line++;
	}
	this.EraseCurrentPos = function (matrix) {
		if ( this.orientation == 1 ) 
		{
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX+1] = 0;
			matrix[this.line-1][this.posX] = 0;
			matrix[this.line-1][this.posX-1] = 0;
		}
		else if ( this.orientation == 2 )
		{
			matrix[this.line-1][this.posX+1] = 0;
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX+1] = 0;
			matrix[this.line+1][this.posX] = 0;
		}
		else if ( this.orientation == 3 )
		{
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line+1][this.posX] = 0;
			matrix[this.line+1][this.posX+1] = 0;
		}
		else
		{
			matrix[this.line-1][this.posX] = 0;
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line+1][this.posX-1] = 0;
		}
	}
	this.MoveRight == function () {		
		if ( this.CanMoveRight() )
		{
			this.posX++;
		}
		else
		{
			return;
		}
	}
	this.MoveLeft == function () {
		if ( this.CanMoveLeft () )
		{
			this.posX--;
		}
		else
		{
			return;
		}	
	}
	this.IsOnPlay = function () {
		if ( this.orientation == 1 && this.line == 21 ) 
		{
			return false;
		}
		else if ( (this.orientation == 2 || this.orientation == 3 || this.orientation == 4) && this.line == 20 )
		{
			return false;
		}		
		else
		{
			return true;
		}				
	}
	this.CanMoveRight = function () {
		if ( (this.orientation == 1 || this.orientation == 2 || this.orientation == 3) && this.posX == 8 )
		{
			return false;
		}
		else if ( this.orientation == 4 && this.posX == 9 )
		{
			return false;
		}		
		else
		{
			return true;	
		}			
	}
	this.CanMoveLeft = function () {
		if ( (this.orientation == 1 || this.orientation == 4 || this.orientation == 3) && this.posX == 1 )
		{
			return false;
		}
		else if ( this.orientation == 2 && this.posX == 0 )
		{
			return false;
		}		
		else
		{
			return true;	
		}			
	}
}

function T(){
	this.orientation = 1;                    /* There are 4 possible orientations */
	this.colour = "purple";				
	this.posX = 5;							 /* Position of its center */
	this.line = 3;
	this.onPlay = true;
	
	this.UpdatedPos = function (matrix) {
	
		if ( this.orientation == 1 ) 
		{
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX+1] = 1;
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line-1][this.posX] = 1;
		}
		else if ( this.orientation == 2 )
		{
			matrix[this.line-1][this.posX] = 1;
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX+1] = 1;
			matrix[this.line+1][this.posX] = 1;
		}
		else if ( this.orientation == 3 )
		{
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line][this.posX+1] = 1;
			matrix[this.line+1][this.posX] = 1;
		}
		else
		{
			matrix[this.line-1][this.posX] = 1;
			matrix[this.line][this.posX] = 1;
			matrix[this.line][this.posX-1] = 1;
			matrix[this.line+1][this.posX] = 1;
		}
	}
	this.ChangeOrientation = function () {
		this.orientation++;
	}
	this.MoveNextLine = function () {
		this.line++;
	}
	this.EraseCurrentPos = function (matrix) {
		if ( this.orientation == 1 ) 
		{
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX+1] = 0;
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line-1][this.posX] = 0;
		}
		else if ( this.orientation == 2 )
		{
			matrix[this.line-1][this.posX] = 0;
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX+1] = 0;
			matrix[this.line+1][this.posX] = 0;
		}
		else if ( this.orientation == 3 )
		{
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line][this.posX+1] = 0;
			matrix[this.line+1][this.posX] = 0;
		}
		else
		{
			matrix[this.line-1][this.posX] = 0;
			matrix[this.line][this.posX] = 0;
			matrix[this.line][this.posX-1] = 0;
			matrix[this.line+1][this.posX] = 0;
		}
	}
	this.MoveRight == function () {		
		if ( this.CanMoveRight() )
		{
			this.posX++;
		}
		else
		{
			return;
		}
	}
	this.MoveLeft == function () {
		if ( this.CanMoveLeft () )
		{
			this.posX--;
		}
		else
		{
			return;
		}	
	}
	this.IsOnPlay = function () {
		if ( this.orientation == 1 && this.line == 21 ) 
		{
			return false;
		}
		else if ( (this.orientation == 2 || this.orientation == 3 || this.orientation == 4) && this.line == 20 )
		{
			return false;
		}		
		else
		{
			return true;
		}				
	}
	this.CanMoveRight = function () {
		if ( (this.orientation == 1 || this.orientation == 2 || this.orientation == 3) && this.posX == 8 )
		{
			return false;
		}
		else if ( this.orientation == 4 && this.posX == 9 )
		{
			return false;
		}		
		else
		{
			return true;	
		}			
	}
	this.CanMoveLeft = function () {
		if ( (this.orientation == 1 || this.orientation == 4 || this.orientation == 3) && this.posX == 1 )
		{
			return false;
		}
		else if ( this.orientation == 2 && this.posX == 0 )
		{
			return false;
		}		
		else
		{
			return true;	
		}			
	}
}

function Print(matrix){

	var i,j;
	var str = null;
	for(i=0;i<21;i++)
	{
		for(j=0;j<10;j++)
		{
			str = str + matrix[i][j] + " ";
		}
		str = str + "</br>";
	}
	document.write(str);
}




/* Tetris Grid */
var matrix = new Array( 
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 0
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 1
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 2
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 3
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 4
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 5
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 6
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 7
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],	            // Line 8		   
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 9
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 10
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 11
		       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 12
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 13
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 14
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 15
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 16
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 17
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 18
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 19
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 20			   
			   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],             // Line 21
			  );

			  
var i = new J();






Print(matrix);			  
