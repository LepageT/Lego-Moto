//Time for each photo in milliseconds
var timeSpan = 4000;
var currentImage = 1;
var carrouselInterval;
var maxPhoto = 4;

function startCarrousel() {
    carrouselInterval = window.setInterval(nextPhoto, timeSpan);
}

function stopCarrousel() {
    clearInterval(carrouselInterval);
}

function nextPhoto() {
    var previous = currentImage;
    currentImage++;
    if (currentImage > maxPhoto) {
        currentImage = 1;
    }

    changePhoto(currentImage, previous);
}

function previousPhoto() {
    var previous = currentImage;
    currentImage--;
    if (currentImage <= 0) {
        currentImage = maxPhoto;
    }
    changePhoto(currentImage, previous);
}

function changePhoto(newPhoto, previousPhoto) {
    var nextFigure = document.getElementById("figure" + newPhoto);
    var previousFigure = document.getElementById("figure" + previousPhoto);
    nextFigure.className = "showCarrouselFigure";
    previousFigure.className = "hiddenCarrouselFigure";
    changeCarrouselButtons(newPhoto - 1, previousPhoto - 1);
}

function changeCarrouselButtons(newImage, previousImage) {
    var carrouselSelector = document.getElementById("carrouselSelector");
    var selectorElements = carrouselSelector.getElementsByTagName("li");

    selectorElements[previousImage].className = "";
    selectorElements[newImage].className = "active";
}

//Controls eventListener
function manualChange() {
    clearInterval(carrouselInterval);
    startCarrousel();
    changePhoto(this.innerHTML, currentImage);
    changeCarrouselButtons(this.innerHTML - 1, currentImage - 1);
    currentImage = this.innerHTML;
}

function manualNext() {
    clearInterval(carrouselInterval);
    startCarrousel();
    nextPhoto();
}

function manualPrevious() {
    clearInterval(carrouselInterval);
    startCarrousel();
    previousPhoto();
}