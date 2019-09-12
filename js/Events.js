var date = document.getElementById('date');
// Коли курсор наведений
function MouseOver(){
    date.style.color = "red";
}
// Коли курсор забрали
function MouseOut(){
    date.style.color = "black"   ;
}
// Прослуховувач на дію
date.addEventListener("mouseover",MouseOver);
date.addEventListener("mouseout", MouseOut);

var price = document.getElementById('price');
var elements = document.getElementsByClassName('priced');
// Коли курсор зажатий на елементі
function MouseUp(){
    for(i = 0 ; i < elements.length;i++)
    elements[i].style.color = "black";
}
// Коли курсор відпустили
function MouseDown(){
    for(i = 0 ; i < elements.length;i++)
    elements[i].style.color = "blue";
}
// Прослуховувач на дію
price.addEventListener('mouseup',MouseUp);
price.addEventListener('mousedown',MouseDown);
