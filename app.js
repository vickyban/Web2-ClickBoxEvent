const divId = {
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four"
}
function getRandomDiv(n){
    let id = divId[Math.floor(Math.random() * n) + 1];
    return document.getElementById(id);
}
let boom = getRandomDiv(4);
console.log(boom);

function updateClass(target, className){
    target.setAttribute("class", className);
    target.appendChild(document.createElement("p"));
    target.firstChild.innerText = className.toUpperCase();
}
function changeDiv(e) {
    if(e.target.tagName == "DIV"){
        if(e.target === boom)
            updateClass(e.target, "boom")
        else
            updateClass(e.target, "safe")
    }
}
function timeOut(target){
    target.removeEventListener("click",changeDiv)
    target.querySelectorAll("div").forEach( (div) => {
        div.setAttribute("class", "timeout");
    })
}
//------------------End of Helpers------------------------------------------
const timesUp = document.getElementById("timesUp");
const body =document.querySelector("body");
let count = 1;

let interval = setInterval(()=>{
    timesUp.innerHTML = count++;
}, 1000);

let timeout = setTimeout(()=> {
    clearInterval(interval);
    timesUp.innerHTML = "Time out"
    timeOut(body);
}, 5000)

body.addEventListener("click", changeDiv, false);