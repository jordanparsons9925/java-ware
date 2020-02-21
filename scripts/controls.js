var scrollingBackground = {
    Image: document.getElementById("scrollBackground"),
    Y: 0,
    X: 0
}
var canvas = document.getElementById("screen");
var screen = canvas.getContext("2d");
var movementCounter = 0;

var renderBackground = function() {
    screen.strokeStyle = "#FFFFFF";
    screen.fillRect(0, 0, 1280, 720);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X, scrollingBackground.Y);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X+1279, scrollingBackground.Y);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X, scrollingBackground.Y+719);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X+1279, scrollingBackground.Y+719);
    scrollingBackground.X -= 1;
    scrollingBackground.Y -= 0.5629;
    if (movementCounter++ == 1280) {
        scrollingBackground.X = 0;
        scrollingBackground.Y = 0;
        movementCounter = 0;
    }
        
    
}

window.onload = function() {
    screen.width = document.getElementById("screen").style.width / 2;
    screen.height = document.getElementById("screen").style.height / 2;
    window.setInterval(renderBackground, 16);
}