function clear_all() {
    document.querySelectorAll('input, textarea').forEach(element => {
        element.value = '';
    });
}

function keyListener() {
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    let currentIndex = 0;


    navItems[currentIndex].focus();

    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % navItems.length;
            navItems[currentIndex].focus();
            event.preventDefault();
        } else if (event.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + navItems.length) % navItems.length;
            navItems[currentIndex].focus();
            event.preventDefault();
        }
    });
}

function handleResponse(response) {
    let answers = ['Сообщение успешно отправлено!', 'Произошла ошибка. Пожалуйста, попробуйте еще раз.']
    const statusMessage = document.getElementById('statusMessage');
    if (response.ok) {
        statusMessage.textContent = answers[0];
        statusMessage.style.color = 'green';
    } else {
        statusMessage.textContent = answers[1];
        statusMessage.style.color = 'red';
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this); 
    
    fetch('', {
        method: 'POST',
        body: formData
    })
    .then(handleResponse)
    .catch(error => {
        console.error('Ошибка:', error);
        const statusMessage = document.getElementById('statusMessage');
        statusMessage.textContent = 'Ошибка сети. Попробуйте позже.';
        statusMessage.style.color = 'red';
    });
});

function clear_all() {
    document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(element => {
        element.value = '';
    });
}

function showGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hours = new Date().getHours();
    let greetingText;

    switch (true) {
        case (hours >= 6 && hours < 12): 
            greetingText = "Доброе утро!"; 
            break;
        case (hours >= 12 && hours < 18): 
            greetingText = "Добрый день!"; 
            break;
        default: 
            greetingText = "Добрый вечер!";
    }

    greetingElement.innerHTML = '';
    
    greetingText.split('').map((letter, index) => {
        const span = document.createElement('span');
        
        span.textContent = letter;
        span.style.setProperty('--i', index);


        if (letter === ' ') {
            span.textContent = '\u00A0'; 
        }
        
        greetingElement.appendChild(span);
    });

    greetingElement.classList.remove('hidden');
    greetingElement.classList.add('visible');
}

function soundBySendingForm() {
    document.getElementById("audio").play();
}

document.querySelector('.btn-danger').addEventListener('click', clear_all);
document.addEventListener('DOMContentLoaded', keyListener);
document.addEventListener('DOMContentLoaded', showGreeting);

