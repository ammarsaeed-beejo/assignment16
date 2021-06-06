var n1 = document.getElementById('value1');

var n2 = document.getElementById('value2');

var result = document.getElementById('result');

var select = document.querySelector("select");

var button = document.querySelector("button")

button.addEventListener("click", function () {

var opreater = select.options[select.selectedIndex].value;

//+

var operators = {
'+': function (n1, n2) { return n1 + n2 }},

var operators = {
'-': function (n1, n2) { return n1 - n2 }},

var operators = {
'*': function (n1, n2) { return n1 * n2 }},

var operators = {
'/': function (n1, n2) { return n1 / n2 }};


result.value = operators[opreater](+n1.value, +n2.value);
});
