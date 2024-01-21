const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ""){
        alert("you must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listCont.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
}else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}
}, false);

function saveData(){
    localStorage.setItem("data", listCont.innerHTML);
} 
function showTask(){
    listCont.innerHTML = localStorage.getItem("data");
} 
showTask();