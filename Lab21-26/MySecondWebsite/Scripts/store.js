var slideIndex = 1;
var slideIndex2 = 1;
showDivs(slideIndex);
showText(slideIndex2);

function plusDivs(n) {
    showDivs(slideIndex += n);
    showText(slideIndex2 += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

function showText(n) {
    var i;
    var x = document.getElementsByClassName("myText");
    if (n > x.length) { slideIndex2 = 1 };
    if (n < 1) { slideIndex2 = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex2 - 1].style.display = "block";
}