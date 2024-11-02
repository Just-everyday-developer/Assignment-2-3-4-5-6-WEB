function validate_form(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    else if (surname === "") {
        alert("Surname must be filled out")
        return false;   
    }
    return true;
}

//Task 2

function NewElement() {
    let li = document.createElement("li");
    let InputValue = document.getElementById("text_field").value.trim();
    let t = document.createTextNode(InputValue);
    li.appendChild(t);

    // Проверка на пустое значение
    if (InputValue === "") {
        alert("You must write something!");
    } else {
        document.getElementById("MyUL").appendChild(li);
    }
    document.getElementById("text_field").value = ""; // Очищаем поле ввода

    li.onclick = function() {
        li.classList.toggle("checked");
    }
    
    let span = document.createElement("SPAN");
    let text = document.createTextNode(" \u00D7"); 
    span.className = "close"; 
    li.className = "element"; 
    span.appendChild(text); 
    li.appendChild(span); 
    
    span.onclick = function(event) {
        let div = this.parentElement;
        div.style.display = "none"; 
    }
    
}

//Task 3
function Number_Sorting_Tool(ascending, descending){
    document.getElementById("numbers").addEventListener("input", function(x){this.value = this.value.replace(/[^0-9\s]/g, '')})
    let array = document.getElementById("numbers").value.split("").map(function(x) {return parseInt(x, 10)}).filter(x => !isNaN(x));
    if (ascending) {
        document.getElementById("Answer").innerText = array.sort(function(a, b){return a - b}).join(", ")
    }
    else if (descending) {
        document.getElementById("Answer").innerText = array.sort(function(a, b){return b - a}).join(", ")
    }

}

function change_background_color(){
    let array = ["red", "orange", "brown", "green", "blue", "gold","pink", "purple", "yellow", "gray", "white"];
    const random = Math.floor(Math.random() * array.length)
    setTimeout(function(){document.body.style.backgroundColor = array[random];}, 3000
)
    
}

function Display_current_DateAndTime(){
    let date = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true
    };
    document.getElementById("Datetime").classList.add('box', 'box-inner')
    document.getElementById("Datetime").innerText = date.toLocaleDateString('en-US', options);

}

document.getElementById("guess_number").addEventListener("input", function () {
    this.value = this.value.replace(/-/g, '');
});


let random_number = Math.floor(Math.random() * 100) + 1;
const my_number = random_number;
let count = 0;

function Guess_My_Number() {    
    let number = document.getElementById("guess_number").value;

    if (isNaN(number) || number < 1 || number > 100) {
        alert("Пожалуйста, введите число от 1 до 100.");
        count++;
    }
    else if (number > my_number) {
        alert("Ваше число больше моего.");
    } else if (number < my_number) {
        alert("Ваше число меньше моего.");
    } else {
        document.getElementById("Answer_guess_number").innerText = `Ура! Вы угадали число за ${count} попыток.`;
    }
}