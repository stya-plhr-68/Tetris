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
	setVisibility("versionpage", false);
	setVisibility("helppage", true);
}

function versionClicked()
{
     console.log("version clicked");
	 setVisibility("gamepage", false);
	 setVisibility("helppage", false);
	 setVisibility("versionpage", true);
}
	 
function gameClicked() {
	console.log("help clicked");
	console.log("version clicked");
	setVisibility("gamepage", true);
	setVisibility("helppage", false);
	setVisibility("versionpage", false);
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


