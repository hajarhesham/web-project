

//form

var counter = 0;
var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var username = document.getElementById("username");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var phone = document.getElementById("phone");
var major = document.getElementById("major");
var country = document.getElementById("country");
var region = document.getElementById("region");
var universty = document.getElementById("universty");
var college = document.getElementById("college");
var check1 = document.getElementById("radio11");
var check2 = document.getElementById("radio22");
var warning1 = document.getElementById("alert");
var arr = [fullname, email, username, password, password2, phone, major, country, region, universty, college];

document.getElementById("btn").addEventListener("click", reg);
function reg() {
    counter = 0;
    for (var i = 0; i < 11; i++) {

        if (arr[i].value == "") {
            arr[i].style.borderColor = "red";
        }
        else {
            arr[i].style.borderColor = "#2B7A77";
            counter++;
        }
    }

    if (counter == 11) {
        if (check1.checked || check2.checked) {
            warning1.textContent = "";
            alert("You have registered");
            formreset.reset();
        }
    }
    else {
        warning1.textContent = "**Please, fill the empty fields";
    }

}

