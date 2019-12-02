// Для зручності створюю змінні з даними об'єктів
var buttonDark = document.getElementById('DarkTheme');
var buttonLight = document.getElementById('LightTheme');
var header = document.getElementById('header');
var linkz = document.getElementsByTagName('a');
var container = document.getElementsByClassName('container');
var footer = document.getElementById('footer');
// Функція темної теми, зміна кольорів та стилів
function GoDark(){
    header.style.backgroundColor = "black";
    document.body.style.backgroundColor = "red";
    for(var i = 0;i<linkz.length; i++){linkz[i].style.color = "red"; }
    for(var i = 0;i<container.length;i++){container[i].style.backgroundColor = 'black';}
    buttonLight.style.visibility = 'visible';
    buttonDark.style.visibility = 'hidden';
    document.body.style.color = "red";
    footer.style.backgroundColor = 'black';
}
// Функціяі світлої теми, зміна кольорів та стилів
function GoLight(){
    header.style.backgroundColor = "white";
    document.body.style.backgroundColor = "#c2bba7";
    for(var i = 0;i<linkz.length; i++){linkz[i].style.color = "black"; }
    for(var i = 0;i<container.length;i++){container[i].style.backgroundColor = 'white';}
    buttonLight.style.visibility = 'hidden';
    buttonDark.style.visibility = 'visible';
    document.body.style.color = "black";
    footer.style.backgroundColor = 'white';
}
// Прослуховування на дію натиску на кнопку
buttonDark.addEventListener('click', GoDark);
buttonLight.addEventListener('click', GoLight);









