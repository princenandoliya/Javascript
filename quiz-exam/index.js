

let quiz = [
  {
    id: 1,
    question: "What is the main role of a backend server?",
    options: [
      "To design UI",
      "To handle business logic and data",
      "To style web pages",
      "To animate elements"
    ],
    correctIndex: 1
  },
  {
    id: 2,
    question: "Which of the following is a backend runtime environment?",
    options: [
      "React",
      "Node.js",
      "CSS",
      "HTML"
    ],
    correctIndex: 1
  },
  {
    id: 3,
    question: "Which database is commonly used with full-stack JavaScript apps?",
    options: [
      "MongoDB",
      "Photoshop",
      "Figma",
      "Bootstrap"
    ],
    correctIndex: 0
  },
  {
    id: 4,
    question: "Which HTTP method is used to send data to the server?",
    options: [
      "GET",
      "POST",
      "DELETE",
      "PUT"
    ],
    correctIndex: 1
  },
  {
    id: 5,
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Input",
      "Application Process Integration",
      "App Programming Internet"
    ],
    correctIndex: 0
  },
  {
    id: 6,
    question: "Which tool is used for version control in development?",
    options: [
      "Git",
      "NPM",
      "Webpack",
      "Docker"
    ],
    correctIndex: 0
  },
  {
    id: 7,
    question: "Which of the following is used to build frontend UI?",
    options: [
      "Express.js",
      "Node.js",
      "React",
      "MongoDB"
    ],
    correctIndex: 2
  },
  {
    id: 8,
    question: "What is the purpose of Express.js?",
    options: [
      "Database management",
      "Frontend design",
      "Backend framework",
      "CSS styling"
    ],
    correctIndex: 2
  },
  {
    id: 9,
    question: "Which format is commonly used to exchange data between frontend and backend?",
    options: [
      "XML",
      "JSON",
      "HTML",
      "CSS"
    ],
    correctIndex: 1
  },
  {
    id: 10,
    question: "Which HTTP method is used to delete data?",
    options: [
      "GET",
      "POST",
      "DELETE",
      "PUT"
    ],
    correctIndex: 2
  }

];

let qnsno = document.getElementById("qnsno")
let next = document.getElementById("next")
let timer = document.getElementById("timer")


let qnscounter = 1;
let score = 0;
let index = 0;
let selecteans = null;
let Timerleft = 30;
let interval;
let container = document.getElementById("container")


function loadqns() {
         
      time()

  let qns = document.getElementById("qns");
  let options = document.getElementById("options")

  selecteans = null;

  qns.innerHTML = quiz[index].question;
  options.innerHTML = "";


  quiz[index].options.forEach((opn, index) => {

    let div = document.createElement("div")
    div.classList.add("col-6", "mb-3", "mx-auto")

    let btn = document.createElement("button")
    btn.innerText = opn;

    btn.classList.add("p-2", "btn", "option-btn", "w-100")
    btn.style.minHeight = "50px"
    btn.addEventListener("click", () => {
      selecteans = index;
      nextqns()
    })


    div.appendChild(btn)
    options.appendChild(div)

  });




}
loadqns()

let userans = [];

function nextqns() {

  userans.push(
    selecteans !== null ? selecteans : null
  );


  if (selecteans === quiz[index].correctIndex) {
    score++;
  }
  index++;
  qnscounter++;
  if (index < quiz.length) {

    qnsno.innerHTML = `question: ${qnscounter}/${quiz.length}`
    loadqns()

  } else {

    showresult()
  }
}
function time (){
    clearInterval(interval);
    Timerleft = 30;

    timer.innerHTML = `Time left : ${Timerleft}`

    interval = setInterval(()=>{
      Timerleft--;      

      timer.innerHTML = `Time left :${Timerleft}`

      if(Timerleft < 0){
        nextqns()
        selecteans = null
      }
    },1000)

}


function showresult() {
  next.classList.add("d-none");

  let qns = document.getElementById("qns");
  let options = document.getElementById("options");

  container.style.marginTop = "750px"
  timer.style.display="none"

  qns.innerHTML = `Your Score is : ${score}/${quiz.length}`;
  options.innerHTML = "";

  let qnsHTML = document.getElementById("qnsresult");
  qnsHTML.innerHTML = "";

  quiz.forEach((qns, index) => {

    let usersans =
      userans[index] !== null
        ? qns.options[userans[index]]
        : "Not Attempted";

    let container = document.createElement("div");
  

    let qnsShow = document.createElement("h3");
    qnsShow.innerText = `${index + 1}. ${qns.question}`;
    qnsShow.classList.add("mt-5", "mb-3");

    let correctAnswer = document.createElement("p");
    correctAnswer.innerText = `Correct Ans : ${qns.options[qns.correctIndex]}`;
    correctAnswer.classList.add("text-white", "mt-2");

    let selectedAnswer = document.createElement("p");
    selectedAnswer.innerText = `Your Ans : ${usersans}`;

    if (userans[index] === qns.correctIndex) {
      selectedAnswer.classList.add("text-white");
    } else {
      selectedAnswer.classList.add("text-dark");
    }

    container.appendChild(qnsShow);
    container.appendChild(correctAnswer);
    container.appendChild(selectedAnswer);

    qnsHTML.appendChild(container);
  });
}


