var slideIndex = 1;
showslide(slideIndex);
function prevslide() {
    showslide(--slideIndex);
}
function nextslide() {
    showslide(slideIndex++);
}
function showslide(n) {
    var i;
    var myslides = document.getElementsByClassName("slideboxes");
    var mydots = document.getElementsByClassName("dot");

    if (n >= myslides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = myslides.length;
    }
    for (i = 0; i < myslides.length; i++) {
        myslides[i].style.display = "none";
    }
    for (i = 0; i < mydots.length; i++) {
        mydots[i].className = mydots[i].className.replace(" active", "");
    }
    myslides[slideIndex - 1].style.display = "block";
    mydots[slideIndex - 1].className += " active";
}