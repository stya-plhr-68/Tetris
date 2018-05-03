var lines = 0;
var score = 0;
var remainingTime = 0;
var gameisrunning = false;
var gametimer = null;
var totalLinesShowing = 0;


function clearGameTimer() {
	if (gametimer != null) {
		window.clearInterval(gametimer);
	}
}

function startGame() {
        var t = document.getElementById("myAudio");
        var p = document.getElementById("myOtherAudio");
        document.getElementById("startbtn").innerHTML = "Restart";
        t.play(); 
        p.pause()
	
	lines = 0;
	document.getElementById("linesData").innerHTML = lines;
	
	score = 0;
	document.getElementById("scoreData").innerHTML = score;
	
	remainingTime = 0;
	document.getElementById("timeData").innerHTML = remainingTime + " seconds";
	
	totalLinesShowing = 0;
	
	clearGameTimer();
	gameisrunning = true;
	gametimer = window.setInterval(function() {
		remainingTime = remainingTime + 1;
		document.getElementById("timeData").innerHTML = remainingTime + " seconds";
		if (remainingTime == 0) {
			clearGameTimer();
			gameisrunning = false;
			
		}
	}, 1000);
	
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getDownTime() {
	var result = getRndInteger(200, 1500);
	//console.log("getDownTime: " + result);
	return result;
}

function getUpTime() {
	var result = getRndInteger(700, 1000);
	//console.log("getUpTime: " + result);
	return result;
}

function getStartupTime() {
	var result = getRndInteger(0, 2000);
	//console.log("getStartupTime: " + result);
	return result;
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
	game.putBlockInBoard();
}
gameClicked();


	






