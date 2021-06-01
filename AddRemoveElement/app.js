let button = document.getElementById("add-element");

let elements = document.getElementById("elements");


document.getElementById("add-element").onclick = function () { myFunction() };


let butt = button.onclick = function () {
    elements.insertAdjacentHTML('beforeend',
        `<div class="element">
    <h3>Element</h3>
    <h4>This is an element</h4>
    <button id = "Delete">Delete</button>
    </div>`)


    const del = document.getElementsByClassName("element");
    for (let item of del) {
        item.children[2].onclick = function () {
            item.remove()
        }}};







