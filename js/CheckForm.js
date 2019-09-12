// Функція перевірки чи є цифра у стрічці( порівнює стрічку з цифрами)
function hasNumber(myString) {
    return /\d/.test(myString);
  }
// Функція перевірки чи є літери в стрічці( порівнює стрічку з усіма літерами)
function hasLetter(str){
    return /[a-zA-Z]/.test(str);
}
// Основна функція перевірки яку повертає підтвердження форми
function isFull(){
    // Локальні змінні даних деяких вхідних полів
var nameData = document.myform.first_name.value;
var phoneData = document.myform.phone.value;
var passData = document.myform.password.value;
var passConf = document.myform.password_confirm.value;

    if(hasNumber(nameData)){
        alert("Ім'я не може містити цифри!");
        return false;   
    }
    if(hasLetter(phoneData)){
        alert("Номер не може містити літери");
        return false;
    }
    if(passData != passConf){
        alert('Паролі не співпадають!');
        return false;
    }
    if(nameData == "" || phoneData == "" || passData == "" || passConf == ""){
        alert("Мають бути заповнені всі поля!");
        return false;
    }
}
