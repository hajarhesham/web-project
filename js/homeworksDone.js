//edit value
var edit = document.getElementById("edit");
edit.addEventListener('click', editFunc);



function editFunc() {
    var name = document.getElementById("name");
    var start = document.getElementById("Start");
    var end = document.getElementById("End");
    var degree = document.getElementById("Degree");
    var formElem = [name, start, end, degree];


    if (formElem[0].disabled == true) {
        for (var i = 0; i < 4; i++) {
            formElem[i].disabled = false;
        }
        edit.innerHTML = "Done";

    } else {
        for (var i = 0; i < 4; i++) {
            formElem[i].disabled = true;
        }
        edit.innerHTML = "Edit";
    }


}
