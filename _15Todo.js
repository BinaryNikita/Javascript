function todo(){
    let task = [];

    function add(newTask){
        task.push(newTask.toLowerCase());
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
        for(let a of task){
console.log(a);
        }
    }

    return {
        add: add,
        deleteTask: deleteTask,
        showAll: showAll
    };
}
let todolist = todo();
todolist.add("Eat");
todolist.add("Sleep");
todolist.add("WALK");
todolist.deleteTask("Eat");
todolist.showAll();