
//newsletter
document.getElementById("newsletterB").addEventListener("click", checkEmail);

function checkEmail() {
    var em = document.getElementById("newsletterE");
    var warning = document.getElementById("warning");
    var ecode = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (em.value == "") {
        warning.innerHTML = "*please enter your email first";
        warning.style.color = "red";
    } else {
        if (ecode.test(em.value) == false) {
            warning.innerHTML = "*You have entered an invalid email address!";
            warning.style.color = "red";
        } else {
            warning.innerHTML = "congratulation, you have subscribed successfully";
            warning.style.color = "green";
            warning.style.fontSize = "24px";
            fo.reset();
        }
    }
}

//registration button
function visiturl(url) {
    window.location = url;
}
