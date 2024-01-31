const inputBox=document.getElementById("input-box");
const listcontener=document.getElementById("listcon");
function addTask(){
    if(inputBox.value===''){
        alert("YOU MUST ADD A TASK")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontener.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.append(span);
    }
    inputBox.value="";
    saveData();
}

listcontener.addEventListener("click",function(e){
    if(e.target.tagName =="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listcontener.innerHTML);
}

function showtask(){
    listcontener.innerHTML= localStorage.getItem("data");
}
showtask();