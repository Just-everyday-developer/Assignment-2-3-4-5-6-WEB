//Task 1

function validate_form(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    else if (surname === "") {
        alert("Surname must be filled out")
        return false;   
    }
    else if (email === "" || !email.includes("@") || !(email.includes(".com") || email.includes(".ru") || email.includes(".kz"))) {
        alert("Email must be written correctly");
        return false;
    }
    else if (!regularExpression.test(password)) {
        alert("Password must be between 8 and 16 symbols, including at least one special symbol, one digit (0-9), upper/lowercase letters");
        return false;
    }
    return true;
}

//Task 2

function NewElement(){
    let li = document.createElement("li");
    let InputValue = document.getElementById("text_field").value;
    let t = document.createTextNode(InputValue);
    li.appendChild(t);
    if (InputValue === ""){
        alert("You must write something!");
    }
    else {
        document.getElementById("MyUL").appendChild(li);
    }
    document.getElementById("text_field").value = "";

    li.onclick = function() {
        li.classList.toggle("checked");
    }

    let span = document.createElement("SPAN");
    let text = document.createTextNode(" \u00D7");
    span.className = "close";
    li.className = "element"
    span.appendChild(text);
    li.appendChild(span);

    span.onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

//Task 3
document.getElementById("numbers").addEventListener("input", function(x){this.value = this.value.replace(/[^0-9\s]/g, '')})

function Number_Sorting_Tool(ascending, descending){
    let array = document.getElementById("numbers").value.split("").map(function(x) {return parseInt(x, 10)}).filter(x => !isNaN(x));
    if (ascending) {
        document.getElementById("Answer").innerText = array.sort(function(a, b){return a - b}).join(", ")
    }
    else if (descending) {
        document.getElementById("Answer").innerText = array.sort(function(a, b){return b - a}).join(", ")
    }

}

function change_background_color(){
    let array = ["red", "orange", "brown", "green", "blue", "gold","pink", "purple", "yellow"];
    const random = Math.floor(Math.random() * array.length)
    document.body.style.backgroundColor = array[random]
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
    document.getElementById("Datetime").innerText = date.toLocaleDateString('en-US', options);

}
let random_number = Math.floor(Math.random() * 100)+1;
const my_number = random_number;
let count = 0;
function Guess_My_Number(){
    let number = document.getElementById("guess_number").value;

    document.getElementById("guess_number").addEventListener("input", function(x) {this.value = this.value.replace(/-/g ,'')})
    if (number > my_number) {
        alert("Your number is more than mine");
        count++;
    }
    else if (number < my_number) {
        alert("Your number is less than mine");
        count++;
    }
    else {
        document.getElementById("Answer_guess_number").innerText = `Wow, great job. You guessed it in ${count} guess`;
    }
    
}