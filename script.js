// Importar las funciones de helpers.js
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Agregar una tarea a la lista
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            ${taskText}
            <button class="delete-btn">Eliminar</button>
        `;
        taskList.appendChild(taskItem);


