//Define UI variable

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListener();


//load all event listeners
function loadEventListener() {
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks)

    form.addEventListener('submit', addTask);

    //remove task list
    taskList.addEventListener('click', removeTask);

    //clear task event
    clearBtn.addEventListener('click', clearTasks);

    //filter tasks
    filter.addEventListener('keyup', filterTasks);
}

//add task
function addTask(event) {
    if (taskInput.value === '') {
        alert('add a task');
    }

    //create li element
    const li = document.createElement('li');
    li.className = 'collection-item';

    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //create new link element
    const link = document.createElement('a');
    //add class to link
    link.className = 'delete-item secondary-content';

    //add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);
    console.log(li)

    //store task in localStorage
    storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = '';

    event.preventDefault();

}

//click on the x icon which target the a tag to remove
function removeTask(event) {
    if (event.target.parentElement.classList.contains('delete-item')) {
        console.log(event.target);
        if (confirm("Are you sure?")) {
            event.target.parentElement.parentElement.remove();

            //remove from localStorage
            removeTaskFromLocalStorage(event.target.parentElement.parentElement);
        }
    }

}



function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    console.log(text);

    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}

// Store task
function storeTaskInLocalStorage(task) {
    let tasks;
    // Check if local storage (LS) is empty
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else { // If there are tasks, grab them and store them as an array in the "tasks" variable
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    // Push added task & update LS
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//get tasks from localStorage
function getTasks() {
    let tasks;
    // Check if local storage (LS) is empty
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else { // If there are tasks, grab them and store them as an array in the "tasks" variable
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task) {
        console.log(tasks[0])
        //create li element
        const li = document.createElement('li');
        li.className = 'collection-item';

        //create text node and append to li
        li.appendChild(document.createTextNode(task));

        //create new link element
        const link = document.createElement('a');
        //add class to link
        link.className = 'delete-item secondary-content';

        //add icon html
        link.innerHTML = '<i class = "fa fa-remove"></i>';

        li.appendChild(link);

        //append li to ul
        taskList.appendChild(li);
    });
}

function removeTaskFromLocalStorage(taskItem) {
    console.log(taskItem);

    let tasks;
    // Check if local storage (LS) is empty
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else { // If there are tasks, grab them and store them as an array in the "tasks" variable
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e) {
    // taskList.innerHTML = '';

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
    localStorage.clear();
}