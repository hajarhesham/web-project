
//signin

var btn = document.getElementById("btn");
var eye = document.getElementById("eye");
var pass = document.getElementById("PW");



btn.addEventListener("click", check);
function check() {
    var user = document.getElementById("UN");
    var alert = document.getElementById("alert");


    if (user.value == "drrania" && pass.value == "123456") {
        window.open('finalsigned.html');
        formbtns.reset();
    }

    else if (user.value == "" && pass.value == "") {
        alert.textContent = "*please enter your username and passsword";
        formbtns.reset();
    }

    else if (user.value == "") {
        alert.textContent = "*please enter your name";

    }

    else if (pass.value == "") {
        alert.textContent = "*please enter your password ";
    }

    else {
        alert.textContent = '*the username and password do not match!';

    }
}


//show password
eye.addEventListener("click", showpass);
function showpass() {

    eye.classList.toggle("active");

    (pass.type == 'password') ? pass.type = 'text' : pass.type = 'password';
}


//image slider

var img1 = document.getElementById("display1");
var img2 = document.getElementById("display2");
var img3 = document.getElementById("display3");
var img4 = document.getElementById("display4");
var imgs = [img1, img2, img3, img4];
var j = 0;

window.onload = setInterval(slider, 3000);

function slider() {

    if (j < imgs.length - 1) {
        imgs[j].classList.remove('show');
        imgs[j + 1].classList.add('show');
        j++;
    } else {
        j = 0;
        imgs[3].classList.remove('show');
        imgs[0].classList.add('show');
    }
}

//typo
var text = "It Is Just About \n Being Professional";
var typotext = document.getElementsByClassName("typing")[0];
var i = 0;
window.onload = function () {
    var write = setInterval(function () {
        typotext.textContent += text[i];
        i++;
        if (i > text.length - 1) {
            clearInterval(write);
        }
    }, 50);
}