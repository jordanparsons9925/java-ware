var scrollingBackground = {
    Image: document.getElementById("scrollBackground"),
    Y: 0,
    X: 0
}
var canvas = document.getElementById("screen");
var screen = canvas.getContext("2d");

var renderBackground = function() {
    screen.strokeStyle = "#FFFFFF";
    screen.fillRect(0, 0, 1280, 720);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X, scrollingBackground.Y);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X+1280, scrollingBackground.Y);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X, scrollingBackground.Y+720);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X+1280, scrollingBackground.Y+720);
    scrollingBackground.X -= 1;
    scrollingBackground.Y -= 0.5925;
    if (scrollingBackground.X == 2560 && scrollingBackground.Y == 1440) {
        scrollingBackground.X = 0;
        scrollingBackground.Y = 0;
    }
        
    
}

window.onload = function() {
    screen.width = 1280;
    screen.height = 720;
    window.setInterval(renderBackground, 16);
}