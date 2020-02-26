// getting the canvas and context, sets the gameState
var canvas = document.getElementById("screen");
canvas.width = 1280;
canvas.height = 720;
var screen = canvas.getContext("2d");
var gameState = "controls";

// function for retrieving sprites
var $ = function(spriteName) {
    return document.getElementById(spriteName);
}

// scrolling background object
var scrollingBackground = {
    Image: $("scrollBackground"),
    Y: 0,
    X: 0,
    Counter: 0
}

// scrolling error object
var errorBackground = {
    Image: $("errorBackground"),
    Y: 0,
    X: 0,
    Counter: 0
}

// appearing and shrinking control guide object
var controlGuide = {
    Image: $("controlGuide"),
    Scale: 200,
    YOffset: 320,
    XOffset: 640,
    Counter: 100,
    ToOpacityCounter: 240,
    OpacityCounter: 100,
    Opacity: 0
}

// renders the scrolling coffee background
function renderScrollingBackground() {

    // draws four of the same looping background, all of which moves diagonally
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X, scrollingBackground.Y);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X+1279, scrollingBackground.Y);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X, scrollingBackground.Y+719);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X+1279, scrollingBackground.Y+719);
    scrollingBackground.X -= 2;
    scrollingBackground.Y -= 1.1258;

    // reverts the position of the background when completed animation loop
    if (scrollingBackground.Counter++ == 638) {
        scrollingBackground.X = 0;
        scrollingBackground.Y = 0;
        scrollingBackground.Counter = 0;
    }
}

function renderSmallCups() {
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X, scrollingBackground.Y);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X+1279, scrollingBackground.Y);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X, scrollingBackground.Y+719);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X+1279, scrollingBackground.Y+719);
	screen.drawImage(scrollingBackground.Image, scrollingBackground.X+1279, scrollingBackground.Y+1438);
	screen.drawImage(scrollingBackground.Image, scrollingBackground.X+2558, scrollingBackground.Y+719);
	screen.drawImage(scrollingBackground.Image, scrollingBackground.X+2558, scrollingBackground.Y+1438);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X+2558, scrollingBackground.Y);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X, scrollingBackground.Y+1438);
    screen.drawImage(scrollingBackground.Image, scrollingBackground.X+2558, scrollingBackground.Y+1438);
    scrollingBackground.X -= 2;
    scrollingBackground.Y -= 1.1258;
    if (scrollingBackground.Counter++ == 638) {
        scrollingBackground.X = 0;
        scrollingBackground.Y = 0;
        scrollingBackground.Counter = 0;
    }
}

// renders the controls guide
function renderControls() {

    // handles scaling of controls
    if (controlGuide.Counter > 0) {
        screen.save();
        screen.scale(controlGuide.Scale/100, controlGuide.Scale/100);
        screen.globalAlpha = controlGuide.Opacity;
        controlGuide.Opacity += 0.01;
    } else {

        // handles countdown to fadeaway
        if (controlGuide.ToOpacityCounter > 0) {
            controlGuide.Opacity = 1;
            controlGuide.ToOpacityCounter--;

        // handles controls fadeaway
        } else if (controlGuide.OpacityCounter > 0) {
            screen.save();
            controlGuide.Opacity -= 0.01;
            screen.globalAlpha = controlGuide.Opacity;
            controlGuide.OpacityCounter--;
        }
    }

    // handles the rendering of the background as a seperate entity from the controls when the controls are being rendered
    if (controlGuide.OpacityCounter > 0) {
        screen.drawImage(controlGuide.Image, -(controlGuide.Counter*3.8), -(controlGuide.Counter*1.8));
        screen.restore();

    // or else the menu will then be loaded
    } else {
        gameState = "menu";
    }

    // handles the scaling of the controls
    if (controlGuide.Counter > 0) {
        controlGuide.Scale--;
        controlGuide.Counter--;
    
    // zeroes the controls onto 100 scale once scaling is complete
    } else {
        controlGuide.Scale = 100;
    }
}

// renders a scrolling error sign
function renderError() {
    
    // draws two error symbols on top of each other, moving downward
    screen.drawImage(errorBackground.Image, errorBackground.X, errorBackground.Y);
    screen.drawImage(errorBackground.Image, errorBackground.X, errorBackground.Y+720);
    errorBackground.Y -= 9;

    // resets loop when completed
    if (errorBackground.Counter++ == 79) {
        errorBackground.X = 0;
        errorBackground.Y = 0;
        errorBackground.Counter = 0;
    }
}

// renders screen based on current game state
function renderScreen() {
    switch(gameState) {
        case "controls":
            renderScrollingBackground();
            renderControls();
            break;
        case "menu":
            renderScrollingBackground();
            break;
        default:
            renderError();
            break;
    }
    requestAnimationFrame(renderScreen);
}

// gets the game started
window.onload = function() {
    requestAnimationFrame(renderScreen);
}