var canvas = document.getElementById("screen");
canvas.width = 1280;
canvas.height = 720;
var screen = canvas.getContext("2d");
var gameState = "controls";

var $ = function(spriteName) {
    return document.getElementById(spriteName);
}

var scrollingBackground = {
    Image: $("scrollBackground"),
    Y: 0,
    X: 0,
    Counter: 0
}
var errorBackground = {
    Image: $("errorBackground"),
    Y: 0,
    X: 0,
    Counter: 0
}

function renderScrollingBackground() {
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X, scrollingBackground.Y);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X+1279, scrollingBackground.Y);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X, scrollingBackground.Y+719);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X+1279, scrollingBackground.Y+719);
    scrollingBackground.X -= 2;
    scrollingBackground.Y -= 1.1258;
    if (scrollingBackground.Counter++ == 638) {
        scrollingBackground.X = 0;
        scrollingBackground.Y = 0;
        scrollingBackground.Counter = 0;
    }
}
function renderError() {
    screen.drawImage(errorBackground.Image, errorBackground.X, errorBackground.Y);
    screen.drawImage(errorBackground.Image, errorBackground.X, errorBackground.Y+720);
    errorBackground.Y -= 9;
    if (errorBackground.Counter++ == 79) {
        errorBackground.X = 0;
        errorBackground.Y = 0;
        errorBackground.Counter = 0;
    }
}

function renderScreen() {
    switch(gameState) {
        case "controls":
            renderScrollingBackground();
            break;
        default:
            renderError();
            break;
    }
    requestAnimationFrame(renderScreen);
}

window.onload = function() {
    requestAnimationFrame(renderScreen);
}