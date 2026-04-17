# 🖼️ Image Slider Project

A simple  Image Slider (Carousel)  built using **HTML, CSS, and JavaScript**.
It allows users to navigate through images using **Next/Previous buttons** and also supports **auto-sliding**.

Live Link : https://slider-project-101.netlify.app/

---

## 🚀 Features

* ⏭️ Next & Previous navigation buttons
* 🔁 Auto-slide every 3.5 seconds
* 🎨 Modern UI with glassmorphism effect
* 📱 Responsive and centered layout
* ✨ Smooth hover animations

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (Flexbox, Transitions, Gradient UI)
* JavaScript (DOM Manipulation, setInterval)
* Bootstrap (for basic setup)

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── index.js
└── img/
    ├── img-1.jpg
    ├── img-2.jpg
    ├── img-3.jpg
    └── img-4.jpg
```

---

## ⚙️ How It Works

* Images are stored in an array:

  ```js
  const project = [
     "img/img-1.jpg",
     "img/img-2.jpg",
     "img/img-3.jpg",
     "img/img-4.jpg",
  ];
  ```

* The slider updates the `src` of the image dynamically.

* `nextimg()` → moves forward

* `previmg()` → moves backward

* `setInterval()` → automatically changes image every 3.5 seconds

---

## ▶️ How to Run

1. Download or clone the project
2. Make sure images are inside the `img` folder
3. Open `index.html` in your browser

---

## 🎯 Future Improvements

* Add image indicators (dots)
* Add pause on hover
* Add swipe support for mobile
* Add captions for images

---

## 📸 Preview

A clean centered image slider with glowing navigation buttons and smooth transitions.

---

## 👨‍💻 Author

Developed by **Prince**

---

## 📄 License

This project is free to use for learning purposes.
