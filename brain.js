function draw() {
    background(homeImage);
	Engine.update(engine);
    rectMode(CENTER);
    displayObjectsImagesAndTexts();
    moveObjects();
}