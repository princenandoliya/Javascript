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


let qnscounter = 1;
let score = 0;
let index = 0;
let ans = null;


function loadqns() {
  let qns = document.getElementById("qns");
  let options = document.getElementById("options")

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
      ans = index;
      nextqns()
    })


    div.appendChild(btn)
    options.appendChild(div)

  });




}
loadqns()



function nextqns() {


  if (ans === quiz[index].correctIndex) {
    score++;
  }
  index++;
  qnscounter++;
  if (index < quiz.length) {

    qnsno.innerHTML = `question: ${qnscounter}/${quiz.length}`
    loadqns()

  } else {

    showscore()
  }



}


function showscore() {
  qns.innerHTML = `
  your score is : ${score}/${quiz.length}`;
  options.innerHTML = "";
}
