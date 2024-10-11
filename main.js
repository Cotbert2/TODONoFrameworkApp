
//elements definition
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description')
const checkboxInput = document.getElementById('hasDeadline');
const deadlineInput = document.getElementById('date');
const saveButton = document.getElementById('save-button');


class Task{
    constructor(viewContainer){
        console.log('init class');
        this.container = document.getElementById(viewContainer);
        this.tasks = 0;
    }

    generateTask = (id, title, description, deadline) => {
        return `<section class="task">
            <div>
                <h4 class="title-task">${title}</h4>
                <p>Deadline : ${deadline}</p>
                <div class="description-task">${description}</div>
            </div>
            <div>
                <button class="deleteButton" onclick="markTaskAsDone(${id})"></button>
            </div>
        </section>`
    }

    updateViewTaskPannel  = () => {
        let currentTasks = '';
        taskTODO.forEach( (task, index) =>{
            currentTasks += taskManager.generateTask(task.id, task.name, task.description, task.date);
        })
        this.container.innerHTML = currentTasks;
    }
}

taskManager = new Task('task-view');

let taskTODO = [];

const markTaskAsDone = (identifier) => {
    const position = taskTODO.map( element => element.id).indexOf(identifier);
    taskTODO.splice(position,1 );
    taskManager.updateViewTaskPannel();
    console.log(`position ${position}`);
}





let lastId = 0;



saveButton.addEventListener('click', (event) => {
    let newTask = {
        id: 0,
        name : '',
        description : '',
        hasDeadLine : '',
        date :  '',
        done : false,
    }
    event.preventDefault();
    newTask.id = ++lastId;
    newTask.name = nameInput.value;
    newTask.description = descriptionInput.value;
    newTask.hasDeadLine = checkboxInput.value;
    newTask.date = deadlineInput.value;
    taskTODO.push(newTask);
    console.log(taskTODO)
    taskManager.updateViewTaskPannel();

    console.log(`New task's information :`)
    console.log(newTask)
})