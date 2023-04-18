const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const skull = document.querySelector('.skull');
const btnLogin = document.querySelector(".btn");
const form = document.querySelector('form');
const supercoolmusic = document.getElementById("supercoolmusic");

var username = "";
var date = "";

function saveInput() {
  username = document.getElementById('username').value;
  date = document.getElementById('date').value;

  localStorage.setItem('username', username);
  localStorage.setItem('date', date);
  console.log(username);
  console.log(date);
}
var username = localStorage.getItem('username');
var date = localStorage.getItem('date');
var loginTime = localStorage.getItem('loginTime');
console.log(username);
console.log(date);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  username = document.getElementById('username').value;
  date = document.getElementById('date').value;
  // Save the input values to local storage
  localStorage.setItem('username', username);
  localStorage.setItem('date', date);
  // Redirect to the quiz page
  window.location.href = 'quiz.html';
});

btnLogin.addEventListener("click", function () {
  if (username === "" || date === "") {
    alert("Please fill out all fields before logging in.");
    window.location.href = "index.html";
  } else {
    localStorage.setItem('loginTime', new Date().getTime());
    saveInput();
    window.location.href = "quiz.html";
  }
});



btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  supercoolmusic.play();
})


iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  supercoolmusic.pause();
})


skull.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  wrapper.classList.remove('active1');
  supercoolmusic.play();
})





