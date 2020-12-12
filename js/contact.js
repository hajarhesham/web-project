//form

var counter = 0;
var fname = document.getElementById("fname");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var massage = document.getElementById("massage");
var warning1 = document.getElementById("warning1");
var arr = [fname, email, phone, massage];

document.getElementById("btnsend").addEventListener("click", send);
function send() {
    counter = 0;

    for (var i = 0; i < 4; i++) {

        if (arr[i].value == "") {
            arr[i].style.borderColor = "red";
        }
        else {
            arr[i].style.borderColor = "#17252A";
            counter++;
        }
    }

    if (counter == 4) {
        warning1.textContent = "";
        alert("We Reseved Your Email");
        formreset.reset();
    }
    else {
        warning1.textContent = "**Please, fill the empty fields";
    }

}

//typing counter
var textarea = document.getElementById('massage');
var counter = document.getElementById('counter');
textarea.onkeyup = function () {
    counter.textContent = textarea.value.length;
}