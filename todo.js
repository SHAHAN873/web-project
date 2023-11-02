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
        deleteButton = document.createElement("button");
        li.appendChild(deleteButton);
        listelem.style.display="flex";
        listelem.style.flexDirection="column";
        textBox.value="" ;
}
function deleteTask() {
    var listElem = document.getElementById("listelem");
    var taskItems = listElem.getElementsByTagName("li");
  
    // Iterate through the list items and remove the selected ones
    for (var i = 0; i < taskItems.length; i++) {
      var taskItem = taskItems[i];
      var deleteButton = taskItem.querySelector("button");
  
      if (deleteButton && deleteButton.classList.contains("selected")) {
        listElem.removeChild(taskItem);
      }
    }
  }
  
  
  
  





