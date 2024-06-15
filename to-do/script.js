const inputbox = document.getElementById("task");
const list = document.getElementById("list");

function addtask() {
    if (inputbox.value === '') {
        alert("Your have to write Something!");
    }    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
    }
    inputbox.value='';
    saveData();
}
list.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();

    }
    else if (e.target.classList.contains("check")){
        e.target.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}