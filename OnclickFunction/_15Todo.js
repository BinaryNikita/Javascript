function todo(){
    let task = [];

    function add(){
        const newTask = document.getElementById("taskInput").value;
        let len = task.length;
        task.push(newTask.toLowerCase())
        if(task.length > len){
            document.getElementById("added").textContent = alert("Task added successfully.");
        } else{
            document.getElementById("added").textContent = alert("Some error occured while deleting. "); 
        }
    }

    function deleteTask(){
        const taskName = document.getElementById("deleteTaskInput").value;
        let index = task.indexOf(taskName.toLowerCase());  
        if (index !== -1) {
            task.splice(index, 1); 
            alert(taskName + " deleted successfully.")
        } else {
            alert(taskName + " does not exist")
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
