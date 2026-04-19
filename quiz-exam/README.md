# 🧠 Quiz Application

A simple and interactive **Quiz App** built using **HTML, CSS, Bootstrap, and JavaScript**.
This app displays multiple-choice questions, tracks user answers, includes a timer, and shows results at the end.

Live Link : https://quiz-project-101.netlify.app/

---

## 🚀 Features

* 📋 Multiple-choice questions
* ⏱️ Timer for each question (30 seconds)
* 👉 Auto move to next question after time ends
* 📊 Score calculation
* ✅ Shows correct and selected answers at the end
* 🎨 Responsive UI using Bootstrap

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (Vanilla JS)

---

## 📁 Project Structure

```
📦 Quiz-App
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┣ 📄 index.js
 ┗ 📄 README.md
```

---

## ⚙️ How It Works

1. App loads the first question automatically.
2. User selects an option or waits for timer.
3. After selection or timeout:

   * Answer is stored
   * Score is updated
   * Next question loads
4. After last question:

   * Final score is displayed
   * All questions with correct & selected answers are shown

---

## 🧪 Sample Questions Included

* Backend server role
* Node.js runtime
* MongoDB database
* HTTP methods (GET, POST, DELETE)
* API full form
* Git version control
* React frontend library

---

## 🧩 Key Functions

### `loadqns()`

* Loads current question and options
* Resets timer

### `nextqns()`

* Stores answer
* Moves to next question
* Updates score

### `time()`

* Starts 30-second timer
* Auto skips question if time ends

### `showresult()`

* Displays final score
* Shows correct vs selected answers

---

## ▶️ How to Run

1. Download or clone the project
2. Open folder in VS Code (or any editor)
3. Run `index.html` in browser

---

## 📌 Future Improvements

* Add difficulty levels
* Add category selection
* Store scores in local storage
* Add animations & sound effects
* Add leaderboard

---

## 👨‍💻 Author

Developed by **Prince Nandoliya**

---

## 📄 License

This project is free to use for learning purposes.
