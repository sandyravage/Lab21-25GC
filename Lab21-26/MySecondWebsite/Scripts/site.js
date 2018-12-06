var bingus = document.getElementById("lame");
var bingus2 = document.getElementById("lame2");
var navs = document.getElementsByTagName("a");
var bingus3 = document.getElementById("toggle");

bingus3.addEventListener("click", function (event) {

    for (var i = 0; i < navs.length; i++) {
        if (navs[i].style.display == '') {
            navs[i].style.display = 'block';
            bingus3.style.top = '0';
            bingus3.style.right = '0';
        }
        else if (navs[i].style.display == 'block') {
            navs[i].style.display = '';
        }
    }
});

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

function Scrimmy() {
    
};

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




