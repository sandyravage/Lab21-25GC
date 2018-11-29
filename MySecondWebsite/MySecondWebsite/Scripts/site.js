var bingus = document.getElementById("lame");
var bingus2 = document.getElementById("lame2");

bingus.addEventListener("input", function (event) {
    if (bingus.validity.patternMismatch) {
        bingus.setCustomValidity("Please enter your first name beginning with a capital letter");
    } else {
        bingus.setCustomValidity("");
    }
});

bingus2.addEventListener("input", function (event) {
    if (bingus2.validity.patternMismatch) {
        bingus2.setCustomValidity("Please enter your last name beginning with a capital letter");
    } else {
        bingus2.setCustomValidity("");
    }
});

window.onload = function () {
    document.getElementById("lame11").onchange = validatePassword;
    document.getElementById("lame12").onchange = validatePassword;
}
function validatePassword() {
    var pass2 = document.getElementById("lame12").value;
    var pass1 = document.getElementById("lame11").value;
    if (pass1 != pass2)
        document.getElementById("lame12").setCustomValidity("Passwords do not match");
    else
        document.getElementById("lame12").setCustomValidity('');
    //empty string means no validation error
}

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