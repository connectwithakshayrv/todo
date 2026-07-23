function addTask() {

    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if(taskText === ""){
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.onclick = function(){
        span.classList.toggle("completed");
    };

    const actions = document.createElement("div");
    actions.className = "actions";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function(){
        li.remove();
    };

    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
