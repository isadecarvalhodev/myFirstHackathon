const demon = document.querySelector('.demon');
const summonBtn = document.querySelector('.summon-btn');
const message = document.querySelector('#message');

let isSummoned = false;

summonBtn.addEventListener('click', () => {
    if (!isSummoned) {
        demon.style.display = 'block';
        summonBtn.textContent = 'Dismiss';
        message.style.display = 'block';
    } else {
        demon.style.display = 'none';
        summonBtn.textContent = 'See your punishment';
        message.style.display = 'none';
    }

    isSummoned = !isSummoned;
});

demon.addEventListener('click', () => {
    demon.style.animation = 'spin 2s linear infinite';
    var currentMessage = message.innerHTML;
    if (currentMessage === messages[4]) {
        window.location.href = "https://youtu.be/UX_KqXYU3XE?t=29";
    }
});

demon.addEventListener('animationend', () => {
    demon.style.animation = '';
});

var messages = [
    "You're doomed to do summarizers for eternity.",
    "Your only choice is to cry on DevPT.",
    "You can only drink water during Code Breaks.",
    "You have to write documentation.",
    "Your sex desire will increase dramatically... but you can fuck Maria Leal"
];

var randomIndex = Math.floor(Math.random() * messages.length);

var randomMessage = messages[randomIndex];

message.innerHTML = randomMessage;