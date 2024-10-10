
//elements definition
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description')
const checkboxInput = document.getElementById('hasDeadline');
const deadlineInput = document.getElementById('date');
const saveButton = document.getElementById('save-button');




let taskTODO = [];


const resetValues  = () => {

}

const getTaskInfo = (ev) => {
    event.preventDefault();
};




class Task{
    constructor(viewContainer){
        console.log('init class');
        this.container = document.getElementById(viewContainer);
    }

    generateTask = (title, description, deadline) => {
        return `<section class="task">
            <div>
                <h4 class="title-task">${title}</h4>
                <p>Deadline : ${deadline}</p>
                <div class="description-task">${description}</div>
            </div>
            <div>
                <button class="deleteButton"></button>
            </div>
        </section>`
    }

    updateViewTaskPannel  = () => {
        let currentTasks = '';
        taskTODO.forEach( (task, index) =>{
            currentTasks += taskManager.generateTask(task.name, task.description, task.date);
        })
        this.container.innerHTML = currentTasks;
    }
}

taskManager = new Task('task-view');

//taskManager.generateTask('asd','','');



saveButton.addEventListener('click', (event) => {
    let newTask = {
        name : '',
        description : '',
        hasDeadLine : '',
        date :  '',
        done : false,
    }
    event.preventDefault();
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