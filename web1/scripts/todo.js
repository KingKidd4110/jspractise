const todoList = [{
    name: 'test',
    dueDate: '2024-2-22'
}
];
renderTodoList();

function renderTodoList() {
    let todolistHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const todoHTML = `
        <p>
        ${todo}
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        ">delete</button>
        </p>
        `;
        todolistHTML += todoHTML;
        console.log(todolistHTML);
    }

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

    function addActivity() {
        const inputElement = document.querySelector('.js-name-input');
        const name = inputElement.value;

        const dateInputElement = document.querySelector('.js-date-input');
        const dueDate = dateInputElement.value;


        todoList.push({
            name,
            dueDate
        }
        );

        inputElement.value = '';
        renderTodoList();
    
}
