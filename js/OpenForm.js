var open = document.getElementById('plus');
var form = document.getElementById('reg_form');
var close = document.getElementById('press');
open.addEventListener('click', openForm,false);
// Основна функція
function openForm(){
    // Якщо плюс то відкрити форму та змінити назву 
    if(open.textContent == "+"){
    form.style.display = "block";
    open.textContent = "-";
    close.textContent = 'Натисніть на мінус щоб закрити форму';
}
// У інших випадках змінити знову на плюс та змінити назву
    else {
        form.style.display = "none";
    open.textContent = "+";
    close.textContent = 'Натисніть на плюс для відкриття форми';
}
}