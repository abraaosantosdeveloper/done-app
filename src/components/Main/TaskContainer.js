export function task(id, title, description, creation, deadline, priority, status) {
    const priorityText = priority === 0 ? 'Baixa' : 
                    priority === 1 ? 'Média' : 
                    priority === 2 ? 'Alta' : 'Não definida';
    
    const priorityLevel = priority === 0 ? 'LowPriority' : 
                    priority === 1 ? 'MidPriority' : 
                    priority === 2 ? 'HighPriority' : 'Undefined';

    const status_state = status === 1 ? 'checked' : '';

    const done_status = status === 1 ? 'done' : 'undone';

    console.log("id da tarefa: " + id)

    return `<tr class="task ${done_status}">
                <td class="task-info">
                    <span class="task-title">${title}</span>
                    <p class="task-description">${description}</p>
                </td>
                <td><span class="priority ${priorityLevel}">${priorityText}</span></td>
                <td>${creation}</td>
                <td>${deadline}</td>
                <td><input type="checkbox" class="check-task" ${status_state}></td>
            </tr>`
};