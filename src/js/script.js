import { MenuAnimation } from '../components/Menu/MenuAnimation.js';
import { task } from '../components/Main/TaskContainer.js'

MenuAnimation();


const tasks = [
    {
        'id': 'a1',
        'title': 'Titulo de tarefa',
        'description': 'Descrição da tarefa',
        'creation': '07/07/2025',
        'deadline': '07/07/2025',
        'priority': 2,
        'status': 1
    },

    {
        'id': 'b2',
        'title': 'Titulo de tarefa',
        'description': 'Descrição da tarefa',
        'creation': '07/07/2025',
        'deadline': '07/07/2025',
        'priority': 0,
        'status': 0
    },

        {
        'id': 'c3',
        'title': 'Titulo de tarefa',
        'description': 'Descrição da tarefa',
        'creation': '07/07/2025',
        'deadline': '07/07/2025',
        'priority': 1,
        'status': 1
    },

        {
        'id': 'd4',
        'title': 'Titulo de tarefa',
        'description': 'Descrição da tarefa',
        'creation': '07/07/2025',
        'deadline': '07/07/2025',
        'priority': 2,
        'status': 0
    },

        {
        'id': 'e5',
        'title': 'Titulo de tarefa',
        'description': 'Descrição da tarefa',
        'creation': '07/07/2025',
        'deadline': '07/07/2025',
        'priority': 2,
        'status': 0
    },
    {
        'id': 'g6',
        'title': 'Titulo de tarefa',
        'description': 'Descrição da tarefa',
        'creation': '07/07/2025',
        'deadline': '07/07/2025',
        'priority': 2,
        'status': 0
    },
    {
        'id': 'h7',
        'title': 'Tarefa Teste',
        'description': 'Esta é uma tarefa de testes',
        'creation': '07/07/2025',
        'deadline': '07/07/2025',
        'priority': 0,
        'status': 1
    }

];

function renderTasks() {
    let taskTable = document.getElementById('task-list')

    for (let i = 0; i < tasks.length; i++) {
        taskTable.innerHTML += task(tasks[i].id, tasks[i].title, tasks[i].description, tasks[i].creation, tasks[i].deadline, tasks[i].priority, tasks[i].status);
    }

}

renderTasks();

