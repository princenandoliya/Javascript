

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
let qnstime = document.getElementById("qnstime")
let question = document.getElementById("Question")
let options = document.getElementById("option")
let nextqns = document.getElementById("nextqns")
let index = 0
let counter = 1;
let Timerleft = 30;
let interval;

function loadqns() {

    question.innerText = quiz[index].question
    options.innerHTML = ""

    quiz[index].options.forEach((ops, index) => {


        let div = document.createElement("div")
        div.classList.add("col-6")

        let btn = document.createElement("button")
        btn.innerText = ops;
        btn.classList.add("btn", "btn-outline-primary", "w-100")
        btn.style.minHeight = "50px"
        btn.addEventListener("click", () => {
            next()
        })
        div.appendChild(btn)
        options.appendChild(div)
    })
}


function next() {
    if (index < quiz.length) {
        qnsno.innerHTML = `Question : ${index + 1}/${quiz.length}`
        loadqns()
        index++;
    }else{
        

    }
}
next()

function time() {
    clearInterval(interval);
    Timerleft = 30;

    qnstime.innerHTML = `Time left : ${Timerleft}`;

    interval = setInterval(() => {
        Timerleft--;

        qnstime.innerHTML = `Time left : ${Timerleft}`;

        if (Timerleft < 0) {
            clearInterval(interval);
            next(); 
        }
    }, 1000);
}
time()