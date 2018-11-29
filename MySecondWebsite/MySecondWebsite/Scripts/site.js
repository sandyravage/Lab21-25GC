var bingus = document.getElementById("lame");

bingus.addEventListener("input", function (event) {
    if (bingus.validity.patternMismatch) {
        bingus.setCustomValidity("Please enter your first name beginning with a capital letter");
    } else {
        bingus.setCustomValidity("");
    }
});


//var slideIndex = 1;
//showDivs(slideIndex);

//function plusDivs(n) {
//    showDivs(slideIndex += n);
//}

//function showDivs(n) {
//    var i;
//    var x = document.getElementsByClassName("mySlides");
//    if (n > x.length) { slideIndex = 1 };
//    if (n < 1) { slideIndex = x.length };
//    for (i = 0; i < x.length; i++) {
//        x[i].style.display = "none";
//    }
//    x[slideIndex - 1].style.display = "block";
//}