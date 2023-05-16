function clickThis() {
        alert("Loading weather report...");
}


var temp = document.querySelector("#temp");
var temp2 = document.querySelector("#temp2");
var temp3 = document.querySelector("#temp3");
var temp4 = document.querySelector("#temp4");
var temp5 = document.querySelector("#temp5");
var temp6 = document.querySelector("#temp6");
var temp7 = document.querySelector("#temp7");
var temp8 = document.querySelector("#temp8");



function convert(element) {
        if (element.value == "Fahrenheit") {
                temp.innerText = Math.round((9 / 5) * 24 + 32) + "°";
                temp2.innerText = Math.round((9 / 5) * 18 + 32) + "°";
                temp3.innerText = Math.round((9 / 5) * 27 + 32) + "°";
                temp4.innerText = Math.round((9 / 5) * 19 + 32) + "°";
                temp5.innerText = Math.round((9 / 5) * 21 + 32) + "°";
                temp6.innerText = Math.round((9 / 5) * 16 + 32) + "°";
                temp7.innerText = Math.round((9 / 5) * 26 + 32) + "°";
                temp8.innerText = Math.round((9 / 5) * 21 + 32) + "°";
        }
        else {
                temp.innerText = 24 + "°";
                temp2.innerText = 18 + "°";
                temp3.innerText = 27 + "°";
                temp4.innerText = 19 + "°";
                temp5.innerText = 21 + "°";
                temp6.innerText = 16 + "°";
                temp7.innerText = 26 + "°";
                temp8.innerText = 21 + "°";
        }
}


var cookie = document.querySelector(".disclaimer");

function press(element) {
        cookie.remove();
}



