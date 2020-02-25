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