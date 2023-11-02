let textBox = document.getElementById("textinput");
let listdiv = document.getElementById("listelem");
let trashButton = document.getElementById("trashButton")
function addTask(){
    if(textBox.value===""){
        alert("Write your Tasks");
    }
        li = document.createElement("li");
        li.innerHTML = textBox.value;
        listelem.appendChild(li);
        delbtn = document.createElement("button")
        delbtn.classList.add("delete-button")
        delbtn.style.height = "30px"
        delbtn.style.width = "30px"
        li.appendChild(delbtn)
        listelem.style.display="flex";
        listelem.style.flexDirection="column";
        textBox.value="" ;
}
listdiv.addEventListener("click", function (event) {
  if (event.target.className === "delete-button") {
    // Remove the parent <li> element when the delete button is clicked
    const taskItem = event.target.closest("li");
    taskItem.remove();
  }
});
 
  
  
  
  





