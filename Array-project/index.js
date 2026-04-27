
let push = document.getElementById("push")
let pop = document.getElementById("pop")
let shift = document.getElementById("shift")
let unshift = document.getElementById("unshift")
let slice = document.getElementById("slice")
let some = document.getElementById("some")
let reverse = document.getElementById("reverse")
let indexOf = document.getElementById("indexOf")
let includes = document.getElementById("includes")
let map = document.getElementById("map")
let filter = document.getElementById("filter")
let reduce = document.getElementById("reduce")
let arr = [];

let inp1 = document.getElementById("inp1")

function star(){

    let inp = document.getElementById("price").value

    inp1.innerHTML = ""

    for(let i=1; i <= inp;i++){
        inp1.innerHTML += `
           <input type="text" class="mb-2 form-control w-75" placeholder="Enter Element ${i}" id="el${i}">
           `
    }    
}

function loadArray() {
    let count = document.getElementById("price").value; 

    arr = [];

    for (let i = 1; i <= count; i++) {
        let val = document.getElementById("el" + i).value;

        if (val !== "") {
            arr.push(val); 
        }
    }

    let out = document.getElementById("arrayoutput"); 
    out.innerHTML = "Array : [ " + arr.join(", ") + " ]";
}



function getValues() {
    let count = document.getElementById("price").value;
    let arr = [];

    for (let i = 1; i <= count; i++) {
        let val = document.getElementById(`el${i}`).value;
        if (val !== "") {
            arr.push(val); 
        }
    }
    return arr;
}
function showOutput(data) {
    let out = document.getElementById("output");

    if (Array.isArray(data)) {
        out.innerHTML = `output:- ${data.join(" , ")}`;
    } else {
        out.innerHTML = data;
    }
}

function pushMethod() {
    let arr = getValues();
    let newItem = prompt("Enter new item");
    arr.push(newItem);

    showOutput(arr);
}

function popMethod() {
    let arr = getValues();
    arr.pop();

    showOutput(arr);
}
function shiftMethod() {
    let arr = getValues();
    arr.shift();

    showOutput(arr);
}

function unshiftmethod(){
    let arr = getValues();
    let newItem = prompt("Enter New Items");
    arr.unshift(newItem)


    showOutput(arr)
}

function reversemethod(){
    let  arr = getValues()

    arr.reverse();

    showOutput(arr)
}
function includesMethod() {
    let arr = getValues();

    let value = prompt("Enter value to check");

    let result = arr.includes(value);

    showOutput(result);
}

function findMethod() {
    let arr = getValues();

    let value = Number(prompt("Enter number to find greater than"));

    let result = arr.find(num => num > value);

    showOutput(result);
}
