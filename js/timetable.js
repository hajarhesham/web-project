//table sellctor

var inputtext = document.getElementById("subject");

document.getElementById("add").addEventListener('click', addToTable);
function addToTable() {

    var sellectday = document.getElementById("Days");
    var optionday = sellectday.options[sellectday.selectedIndex].value;
    var sellectime = document.getElementById("thetime");
    var optiontime = sellectime.options[sellectime.selectedIndex].value;
    var timetable = document.getElementById("timetable");

    var days = ["SUN", "MON", "TUE", "WED"];
    var times = ["9-10:30", "10:30-12", "12:30-2", "2:10-3:40"];
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (days[i] == optionday) {
                if (times[j] == optiontime) {
                    timetable.rows[i + 1].cells[j + 1].innerHTML = inputtext.value;
                }
            }
        }
    }
}