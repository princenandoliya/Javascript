const project = [
   "img/img-1.jpg",
   "img/img-2.jpg",
   "img/img-3.jpg",
   "img/img-4.jpg",
   
]

let img = document.getElementById("img")
let index = 0;

function loadimg() {
   img.src = `${project[index]}`;
}
loadimg()

function nextimg() {
   index++;
   if (index >= project.length) {
      index = 0;
   }
   loadimg()
}

function previmg() {
   index--;
   if (index < 0) {
      index = project.length - 1;
   }
   loadimg()
}
loadimg()

setInterval(()=>{
   nextimg()
},3500)