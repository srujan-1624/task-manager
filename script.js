document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText) {
        const taskList = document.getElementById('task-list');

        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });

        newTask.appendChild(completeBtn);
        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);

        document.getElementById('new-task').value = '';
    }
});
