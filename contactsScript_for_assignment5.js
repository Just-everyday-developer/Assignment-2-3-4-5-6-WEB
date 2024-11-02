//Task 1
function changeColor() {

    document.body.classList.toggle('night-theme');
    const footer = document.querySelector('footer');
    footer.classList.toggle('night-theme');
}

function rate() {
    const stars = document.querySelectorAll('.star');
    let isRated = false; 

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            if (isRated) return;

            stars.forEach((s, i) => {
                s.style.color = i <= index ? 'gold' : 'gray';
            });
            document.getElementById("audio").play();

            stars.forEach(s => {
                s.style.pointerEvents = 'none'; 
            });

            isRated = true; 
        });
    });
}


//Task 2

function readmore() {
    const originalText = "Lorem ipsum dolor sit amet consectetur adipisicing elit."; // Оригинальный текст
    const fullText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod, sint reiciendis quos quam corrupti esse, nostrum corporis eius, non odio quidem praesentium blanditiis quis repellendus quasi iure. Laudantium debitis expedita officiis facilis nobis tempora explicabo qui nulla suscipit odio error tempore, a porro magni vero ad laboriosam neque enim ex, accusantium nostrum non! Minus fugiat voluptate iusto mollitia veniam nulla hic perferendis eligendi quia aut obcaecati id, nisi totam, officiis, consequuntur impedit ad blanditiis reiciendis similique! Eius molestiae eaque reiciendis magni asperiores soluta nihil repudiandae nisi, ullam sunt perferendis, vitae molestias cupiditate nulla. Minima aut quisquam quod enim maiores, expedita fugit neque laudantium quibusdam doloribus, esse dicta. Rerum deserunt consequuntur minima tempore aliquid necessitatibus eius ut quas culpa velit doloribus omnis deleniti voluptatum, est corporis, dolor quos. Commodi, possimus cupiditate obcaecati vitae nemo voluptas eos neque iusto facere aliquam est, officia vel nisi a consequatur mollitia impedit accusamus voluptatem.";

    const originalContent = document.querySelector('.original-content');


    document.getElementById('readMoreButton').addEventListener('click', function() {
        if (originalContent.textContent === originalText) {
            originalContent.textContent = fullText;
            this.textContent = "Скрыть"; 
        } else {
            originalContent.textContent = originalText;
            this.textContent = "Читать далее";
        }
    })
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

document.addEventListener('DOMContentLoaded', rate);
document.addEventListener('DOMContentLoaded', readmore);
document.addEventListener('DOMContentLoaded', keyListener);
document.addEventListener('DOMContentLoaded', showGreeting);

