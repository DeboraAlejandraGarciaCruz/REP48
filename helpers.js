// Funciones para manejar la lógica de tareas

// Marcar una tarea como completada
function toggleTaskCompletion(taskElement) {
    taskElement.classList.toggle('completed');
}

// Eliminar una tarea de la lista
function deleteTask(taskElement) {
    taskElement.remove();
}
