//clock

var dayclock = document.getElementById("dayclock");
var hourclock = document.getElementById("hourclock");
var minuteclock = document.getElementById("minuteclock");
var secondclock = document.getElementById("secondclock");
var fulldate = document.getElementById("fulldate");
var cmood = document.getElementById("cmood");


window.onload = setInterval(time, 500);
function time() {
    var x = new Date();
    var today = x.getDay();
    var hour = x.getHours();
    var min = x.getMinutes();
    var second = x.getSeconds();
    var day = x.getDate();
    var month = x.getMonth() + 1;
    var year = x.getFullYear();

    var dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'sat'];
    if (hour <= 12) {
        cMood = "AM";
    } else {
        hour = hour - 12;
        cMood = "PM";
    } if (hour < 10) {
        hour = "0" + hour;
    } if (second < 10) {
        second = "0" + second;
    } if (min < 10) {
        min = "0" + min;
    }


    dayclock.innerHTML = dayList[today];
    hourclock.innerHTML = hour;
    minuteclock.innerHTML = min;
    secondclock.innerHTML = second;
    cmood.innerHTML = cMood;
    fulldate.innerHTML = day + "/" + month + "/" + year;
}