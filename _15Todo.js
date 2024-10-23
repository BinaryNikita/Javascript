function todo(){
    let task = [];

    function add(){
        const newTask = document.getElementById("taskInput").value;
        let len = task.length;
        task.push(newTask.toLowerCase())
        if(task.length > len){
            document.getElementById("added").style.color = "green";
            document.getElementById("added").textContent = prompt("Task added successfully.");
        } else{
            document.getElementById("added").style.color = "red";
            document.getElementById("added").textContent = prompt("Some error occured while); deleting. "
        }

    }

    function deleteTask(taskName){
        let index = task.indexOf(taskName.toLowerCase());  
        if (index !== -1) {
            task.splice(index, 1); 
        } else {
            console.log(taskName + " does not exist")
        }
    }

    function showAll(){
        document.getElementById("taskList").innerHTML = "";

    for(let a of task){
        const taskElement = document.createElement("li");
        taskElement.textContent = a;
        document.getElementById("taskList").appendChild(taskElement);

        }
    }

    return {
        add: add,
        deleteTask: deleteTask,
        showAll: showAll
    };
}
const myTodo = todo();
