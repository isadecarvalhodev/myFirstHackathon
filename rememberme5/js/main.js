
var points = 0;
var countClicks = 0;
var timeLeft = 0;
var daysLeftMessageHtml = "";
var questions = [];
var numberRandom = Math.floor(Math.random() * (11 - 1) + 1);
var username = "";
var date = "";
var dataFutura = "";

var goodActions = ["Have you ever helped a stranger in need?",
"Have you volunteered your time to a charitable organization?",
"Have you ever held the door open for someone, even if it made you a little late?",
"Have you apologized to someone you hurt and made amends?",
"Have you ever given a genuine compliment to someone you didn't like?",
"Have you ever paid for someone's meal or drink?",
"Have you ever forgiven someone who wronged you?",
"Have you ever apologized for your mistakes?",
"Have you ever given a sincere compliment to a stranger?",
"Have you ever helped someone move or relocate?",
"Have you ever given up your time to volunteer at an animal shelter?",
"Have you ever helped a stranger find their way?",
"Have you ever donated money to charity?",
"Have you ever given someone a second chance?",
"Have you ever helped a friend in need, even when it inconvenienced you?",
"Have you ever visited someone who was sick or in the hospital?",
"Have you ever gone out of your way to help someone in need?",
"Have you ever donated clothing or household items to a charity?",
"Have you ever given a sincere compliment to someone who needed it?",
"Have you ever helped an elderly person with a task?",
"Have you ever helped a homeless person in need?",
"Have you ever held the door open for someone?",
"Have you ever given up your seat on public transportation for someone else?",
"Have you ever cooked a meal for a friend in need?",
"Have you ever helped someone move to a new home?",
"Have you ever helped a stranger carry their bags?",
"Have you ever donated clothes to a charity?",
"Have you ever visited a lonely person to cheer them up?",
"Have you ever paid for someone else's meal at a restaurant?",
"Have you ever stopped to help a stranded motorist?",
"Have you ever helped a friend move to a new house?",
"Have you ever given a compliment to a stranger?",
"Have you ever given up your seat on public transportation for someone else?",
"Have you ever volunteered your time to a community organization?",
"Have you ever made a donation to a charitable cause?",
"Have you ever helped an elderly person with a task?",
"Have you ever offered a sincere compliment to a friend?",
"Have you ever apologized for a mistake?",
"Have you ever donated money to a good cause?",
"Have you ever helped a lost person find their way?",
"Have you ever donated blood?",
"Have you ever helped a stranger in need?",
"Have you ever volunteered your time for a good cause?",
"Have you ever given up your seat on public transportation for someone else?",
"Have you ever stood up for someone who was being bullied?",
"Have you ever volunteered at a food bank or shelter?",
"Have you ever given up your time to help a friend in need?",
"Have you ever given a homeless person food or money?",
"Have you ever helped a friend with a big project or task?",
"Have you ever given someone a thoughtful gift?"]

var badActions = ["Have you ever ran over someone?",
"Have you stolen something from someone?",
"Have you intentionally hurt someone emotionally or physically?",
"Have you cheated on your partner?",
"Have you neglected your responsibilities and let others down?",
"Have you ever lied to your boss to take a day off?",
"Have you ever broken a promise to someone you care about?",
"Have you ever used someone for personal gain?",
"Have you ever littered in a public place?",
"Have you ever vandalized public property?",
"Have you ever betrayed someone's trust?",
"Have you ever lied to get out of a difficult situation?",
"Have you ever purposely ignored someone who needed your help?",
"Have you ever cheated on a significant other?",
"Have you ever stolen money from someone?",
"Have you ever lied to your partner about something important?",
"Have you ever betrayed a friend's trust for personal gain?",
"Have you ever intentionally hurt someone's feelings to get revenge?",
"Have you ever stolen someone's idea and claimed it as your own?",
"Have you ever bullied someone, either online or in person?",
"Have you ever lied to get out of a responsibility or obligation?",
"Have you ever gossiped about someone behind their back?",
"Have you ever betrayed someone's trust for personal gain?",
"Have you ever cheated on a significant other?",
"Have you ever ignored someone who needed your help?",
"Have you ever lied to get out of trouble?",
"Have you ever cheated in a game or competition?",
"Have you ever stolen something small from a store?",
"Have you ever made a mean joke at someone's expense?",
"Have you ever ghosted someone without explanation?",
"Have you ever knowingly participated in cheating or plagiarism?",
"Have you ever stolen something from work?",
"Have you ever spread rumors or gossip about someone?",
"Have you ever ignored a friend in need?",
"Have you ever lied to get out of trouble with the law?",
"Have you ever bullied someone, whether online or in person?",
"Have you ever lied to get out of a commitment?",
"Have you ever betrayed a friend's trust?",
"Have you ever intentionally hurt someone's feelings?",
"Have you ever stolen something from a friend?",
"Have you ever lied to your best friend?",
"Have you ever cheated on a test or exam?",
"Have you ever stolen something from a store?",
"Have you ever purposely hurt someone's feelings?",
"Have you ever spread a rumor or gossip about someone?",
"Have you ever gossiped about someone behind their back?",
"Have you ever lied to get out of work?",
"Have you ever betrayed a friend's trust for personal gain?",
"Have you ever cheated on a significant other?",
"Have you ever ignored someone who needed your help?"]


const Main = {
  init: function () {
    sortQuestions();
    addClickEvent();
    welcome();
    bornDate();
  }
}

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

function welcome() {
  var welcome = document.querySelector('.welcome');
  welcome.innerHTML = `Welcome, ${username}`
}


function calcularDiasDeVida(dataNascimento) {
  const dataNascimentoObj = new Date(dataNascimento);
  const dataAtual = new Date();
  const diferencaEmMilissegundos = dataAtual - dataNascimentoObj;
  const milissegundosPorDia = 1000 * 60 * 60 * 24;
  const diasDeVida = Math.floor(diferencaEmMilissegundos / milissegundosPorDia);
  return diasDeVida;
}

const diasDeVida = calcularDiasDeVida(date);
console.log(diasDeVida);

function bornDate() {
  var inputDate = document.querySelector('.inputDate');
  inputDate.innerHTML = `You already lived ${diasDeVida} days`
}


function sortQuestions() {
  const listOfQuestions = document.querySelector('.faq');

  shuffle(questions);
  listOfQuestions.innerHTML = "";
  questions.forEach(question => {
    const li = document.createElement("li");
    li.innerText = question;
    listOfQuestions.appendChild(li);
  });
}

function addClickEvent() {

  const listOfQuestions = document.querySelector('.faq');
  const questions = listOfQuestions.children;
  for (let i = 0; i < questions.length; i++) {

    questions[i].addEventListener("click", function () {
      if (countClicks === 5) {

        var beReady = document.querySelector('.beReady');
        beReady.innerHTML = "Be ready for your fate..."

        setTimeout(function () {
          var finalMessage = document.querySelector('.finalMessage');
          finalMessage.innerHTML = `You will live ${timeLeft} years longer and die in ${dataFutura}.`
        }, 5000);

        if(points <= 0){
          setTimeout(function () {
            window.location.href = "hell.html";
          }, 9000);
          
        } else if(points > 0){
          setTimeout(function () {
            window.location.href = "heaven.html";
          }, 9000);
        }
        return;
      }


      this.classList.toggle("marked");
  

      goodActions.forEach(element => {
        if (questions[i].innerText === element) {
          points++;
        }
      });

      badActions.forEach(element => {
        if (questions[i].innerText === element) {
          points--;
        }
      });
      

      timeLeftFunc();
      dataFutura = calcularDataFutura(timeLeft);


      console.log(points + "pontos")
      console.log(timeLeft + "tempo de vida")
      countClicks++;
      console.log(countClicks + "countclicks");

    });
  }
}


function calcularDataFutura(numeroAnos) {
  var dataAtual = new Date();

  dataAtual.setFullYear(dataAtual.getFullYear() + numeroAnos);
  
  
  var ano = dataAtual.getFullYear();
  var mes = dataAtual.getMonth() + 1;
  var dia = dataAtual.getDate();
  
  // formata a data futura como uma string no formato "AAAA-MM-DD"
  var dataFuturaSimplificada = dia + "-" + (mes < 10 ? "0" : "") + mes + "-" + (dia < 10 ? "0" : "") + ano;
  
  // retorna a data futura simplificada
  return dataFuturaSimplificada;
}

// exemplo de uso da função




function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


if (numberRandom === 1) {
  questions = [
    "Have you ever ran over someone?",
    "Have you ever helped a stranger in need?",
    "Have you stolen something from someone?",
    "Have you volunteered your time to a charitable organization?",
    "Have you intentionally hurt someone emotionally or physically?",
    "Have you ever held the door open for someone, even if it made you a little late?",
    "Have you cheated on your partner?",
    "Have you apologized to someone you hurt and made amends?",
    "Have you neglected your responsibilities and let others down?",
    "Have you ever given a genuine compliment to someone you didn't like?"
  ];
} else if (numberRandom === 2) {
  questions = [
    "Have you ever lied to your boss to take a day off?",
    "Have you ever paid for someone's meal or drink?",
    "Have you ever broken a promise to someone you care about?",
    "Have you ever forgiven someone who wronged you?",
    "Have you ever used someone for personal gain?",
    "Have you ever apologized for your mistakes?",
    "Have you ever littered in a public place?",
    "Have you ever given a sincere compliment to a stranger?",
    "Have you ever vandalized public property?",
    "Have you ever helped someone move or relocate?"
  ];
} else if (numberRandom === 3) {
  questions = [
    "Have you ever betrayed someone's trust?",
    "Have you ever given up your time to volunteer at an animal shelter?",
    "Have you ever lied to get out of a difficult situation?",
    "Have you ever helped a stranger find their way?",
    "Have you ever purposely ignored someone who needed your help?",
    "Have you ever donated money to charity?",
    "Have you ever cheated on a significant other?",
    "Have you ever given someone a second chance?",
    "Have you ever stolen money from someone?",
    "Have you ever helped a friend in need, even when it inconvenienced you?"
  ];
} else if (numberRandom === 4) {
  questions = [
    "Have you ever lied to your partner about something important?",
    "Have you ever visited someone who was sick or in the hospital?",
    "Have you ever betrayed a friend's trust for personal gain?",
    "Have you ever gone out of your way to help someone in need?",
    "Have you ever intentionally hurt someone's feelings to get revenge?",
    "Have you ever donated clothing or household items to a charity?",
    "Have you ever stolen someone's idea and claimed it as your own?",
    "Have you ever given a sincere compliment to someone who needed it?",
    "Have you ever bullied someone, either online or in person?",
    "Have you ever helped an elderly person with a task?"
  ];
} else if (numberRandom === 5) {
  questions = [
    "Have you ever lied to get out of a responsibility or obligation?",
    "Have you ever helped a homeless person in need?",
    "Have you ever gossiped about someone behind their back?",
    "Have you ever held the door open for someone?",
    "Have you ever betrayed someone's trust for personal gain?",
    "Have you ever given up your seat on public transportation for someone else?",
    "Have you ever cheated on a significant other?",
    "Have you ever cooked a meal for a friend in need?",
    "Have you ever ignored someone who needed your help?",
    "Have you ever helped someone move to a new home?"
  ];
} else if (numberRandom === 6) {
  questions = [
    "Have you ever lied to get out of trouble?",
    "Have you ever helped a stranger carry their bags?",
    "Have you ever cheated in a game or competition?",
    "Have you ever donated clothes to a charity?",
    "Have you ever stolen something small from a store?",
    "Have you ever visited a lonely person to cheer them up?",
    "Have you ever made a mean joke at someone's expense?",
    "Have you ever paid for someone else's meal at a restaurant?",
    "Have you ever ghosted someone without explanation?",
    "Have you ever stopped to help a stranded motorist?"
  ];
} else if (numberRandom === 7) {
  questions = [
    "Have you ever knowingly participated in cheating or plagiarism?",
    "Have you ever helped a friend move to a new house?",
    "Have you ever stolen something from work?",
    "Have you ever given a compliment to a stranger?",
    "Have you ever spread rumors or gossip about someone?",
    "Have you ever given up your seat on public transportation for someone else?",
    "Have you ever ignored a friend in need?",
    "Have you ever volunteered your time to a community organization?",
    "Have you ever lied to get out of trouble with the law?",
    "Have you ever made a donation to a charitable cause?"
  ];
} else if (numberRandom === 8) {
  questions = [
    "Have you ever bullied someone, whether online or in person?",
    "Have you ever helped an elderly person with a task?",
    "Have you ever lied to get out of a commitment?",
    "Have you ever offered a sincere compliment to a friend?",
    "Have you ever betrayed a friend's trust?",
    "QHave you ever apologized for a mistake?",
    "Have you ever intentionally hurt someone's feelings?",
    "Have you ever donated money to a good cause?",
    "Have you ever stolen something from a friend?",
    "Have you ever helped a lost person find their way?"
  ];
} else if (numberRandom === 9) {
  questions = [
    "Have you ever lied to your best friend?",
    "Have you ever donated blood?",
    "Have you ever cheated on a test or exam?",
    "Have you ever helped a stranger in need?",
    "Have you ever stolen something from a store?",
    "Have you ever volunteered your time for a good cause?",
    "Have you ever purposely hurt someone's feelings?",
    "Have you ever given up your seat on public transportation for someone else?",
    "Have you ever spread a rumor or gossip about someone?",
    "Have you ever stood up for someone who was being bullied?"
  ];
} else if (numberRandom === 10) {
  questions = [
    "Have you ever gossiped about someone behind their back?",
    "Have you ever volunteered at a food bank or shelter?",
    "Have you ever lied to get out of work?",
    "Have you ever given up your time to help a friend in need?",
    "Have you ever betrayed a friend's trust for personal gain?",
    "Have you ever given a homeless person food or money?",
    "Have you ever cheated on a significant other?",
    "Have you ever helped a friend with a big project or task?",
    "Have you ever ignored someone who needed your help?",
    "Have you ever given someone a thoughtful gift?"
  ];
}

function timeLeftFunc() {

  if (points === -1) {
    timeLeft = 20
  } else if (points === -2) {
    timeLeft = 15
  } else if (points === -3) {
    timeLeft = 10
  } else if (points === -4) {
    timeLeft = 5
  } else if (points < - 4) {
    timeLeft = 1
  } else if (points === 0) {
    timeLeft = 30
  } else if (points === 1) {
    timeLeft = 35
  } else if (points === 2) {
    timeLeft = 40
  } else if (points === 3) {
    timeLeft = 45
  } else if (points > 3) {
    timeLeft = 60
  }
}

/*
function timeLeftMessage() {
  var daysLeftMessageHtml = document.querySelector('.howManyDaysLeft');
  daysLeftMessageHtml.innerHTML = `<h1>You only have ${timeLeft} life time!</h1>`
}


function howWillYouDie() {
  var howWillYouDieMessageHtml = document.querySelector('#howManyDaysLeft');
  howWillYouDieMessageHtml.innerHTML = `You only have life time!`
}
*/


Main.init();

