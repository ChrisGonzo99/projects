function remove(element) {
    element.remove()
}

var num = 3; 
function numUp() {
    updateDisplay(++num);
}
function updateDisplay(num) {
    document.getElementById("num").innerHTML = num;
}

var num2 = 5;

function numUp2() {
    num2 += 1;
    document.getElementById('num2').innerHTML = num2;
}

var num3 = 8

function numUp3() {
    num3 += 1;
    document.getElementById('num3').innerHTML = num3;
}

function getSelectValue () {
    var selectedValue = document.getElementById('Dropdown').value;
    alert(selectedValue);
}