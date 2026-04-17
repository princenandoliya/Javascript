# Quiz Application 🎯

A simple and interactive **Quiz Application** built using **HTML, Bootstrap, and JavaScript**. This project displays multiple-choice questions with a timer and allows users to navigate through questions.

---

Live Link : https://quiz-exam-101.netlify.app/

## 🚀 Features

* 📌 Multiple-choice quiz questions
* ⏱️ 30-second timer for each question
* 🔄 Automatic next question on timeout
* 🎨 Responsive UI using Bootstrap
* ▶️ Manual "Next Question" button
* 📊 Displays current question number

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (Bootstrap 5)
* JavaScript (Vanilla JS)

---

## 📂 Project Structure

```
project-folder/
│── index.html     # Main HTML file
│── index.js       # JavaScript logic
```

---

## 📸 How It Works

1. The quiz starts automatically when the page loads.
2. Each question is displayed with 4 options.
3. User can:

   * Click an option → moves to next question
   * Wait → timer runs out and auto moves to next question
4. Timer resets for each new question.

---

## ⚙️ Setup Instructions

1. Clone or download this repository
2. Open the project folder
3. Run `index.html` in your browser

---

## 🧠 Quiz Data Example

Each question follows this structure:

```javascript
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
}
```

---

## ⚠️ Current Limitations

* ❌ No score tracking
* ❌ No correct/incorrect answer feedback
* ❌ No result screen
* ❌ No option highlighting

---

## 💡 Future Improvements

* ✅ Add scoring system
* ✅ Show correct/incorrect answers
* ✅ Add quiz result summary
* ✅ Store high scores
* ✅ Add animations and better UI

---

## 👨‍💻 Author

Created as a beginner-friendly JavaScript project for learning DOM manipulation and event handling.

---

## 📄 License

This project is open-source and free to use.
