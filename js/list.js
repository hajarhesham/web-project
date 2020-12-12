    //add students
var studentName = document.getElementById("stname");
var warning2 = document.getElementById("warning2");
var secnum = document.getElementById("stsection");
var table1 = document.getElementById("table1");
var table2 = document.getElementById("table2");
var table3 = document.getElementById("table3");
var sec1 = [];
var sec2 = [];
var sec3 = [];


function addStudent() {


    if (studentName.value == "") {
        warning2.style.display = "block";
    } else {
        warning2.style.display = "none";


        if (secnum.value == 1) {
            sec1.push(studentName.value);
            var table = document.getElementById("table1");
            var x = table.insertRow(sec1.length);
            var y = x.insertCell(0);
            var z = x.insertCell(1);
            y.innerHTML = sec1.length + 1;
            z.innerHTML = sec1[sec1.length - 1];
            formadd.reset();
        }
        if (secnum.value == 2) {
            sec2.push(studentName.value);
            var table = document.getElementById("table2");
            var x = table.insertRow(sec2.length);
            var y = x.insertCell(0);
            var z = x.insertCell(1);
            y.innerHTML = sec2.length + 1;
            z.innerHTML = sec2[sec2.length - 1];
            formadd.reset();
        }
        if (secnum.value == 3) {
            sec3.push(studentName.value);
            var table = document.getElementById("table3");
            var x = table.insertRow(sec3.length);
            var y = x.insertCell(0);
            var z = x.insertCell(1);
            y.innerHTML = sec3.length + 1;
            z.innerHTML = sec3[sec3.length - 1];
            formadd.reset();
        }
    }






};

//search
document.getElementById("searchlist").addEventListener("input", filterNames);

function filterNames() {
    var input = document.getElementById("searchlist");
    var filter = input.value.toUpperCase();
    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    var table3 = document.getElementById("table3");
    var tr1 = table1.getElementsByTagName("tr");
    var tr2 = table2.getElementsByTagName("tr");
    var tr3 = table3.getElementsByTagName("tr");


    for (var i = 0; i < tr1.length; i++) {
        var td1 = tr1[i].getElementsByTagName("td")[1];
        if (td1) {
            var txtValue1 = td1.textContent;
            if (txtValue1.toUpperCase().indexOf(filter) > -1) {
                tr1[i].style.display = "";
            } else {
                tr1[i].style.display = "none";
            }
        }
    }
    for (var j = 0; j < tr2.length; j++) {
        var td2 = tr2[j].getElementsByTagName("td")[1];
        if (td2) {
            var txtValue2 = td2.textContent;
            if (txtValue2.toUpperCase().indexOf(filter) > -1) {
                tr2[j].style.display = "";
            } else {
                tr2[j].style.display = "none";
            }
        }
    }
    for (var k = 0; k < tr3.length; k++) {
        var td3 = tr3[k].getElementsByTagName("td")[1];
        if (td3) {
            var txtValue3 = td3.textContent;
            if (txtValue3.toUpperCase().indexOf(filter) > -1) {
                tr3[k].style.display = "";
            } else {
                tr3[k].style.display = "none";
            }
        }
    }
}
