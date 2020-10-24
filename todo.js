const todos = [];

const createToDo = () => {
    event.preventDefault()

    const input = document.querySelector('#toDoText')
    const newLi = document.createElement('li') // id ?
    const targetUl = document.querySelector('#listToDo')

    if(input.value == ''){
        return console.log('input empty you silly');
    }

    const strTodos = JSON.stringify(todos);
    const listOfToDos = 'List of Todos';
    
    localStorage.setItem('listOfToDos', strTodos);

    todos.push(input.value);

    for(i=0; i<todos.length; i++){
        newLi.innerHTML = todos[i];   
        targetUl.append(newLi);
    }
    
    input.value = '';
};

// li should have a hover (CSS) with a function to delete (-) (JS id? sur qui on a cliqué)

//localstorage (or Cookie ?) for persistant data


// Use a filter on an array (status: active or completed) - 

// Localstorage JSON stringify, and parse for save and load, use a todosService as an interface, turn data into an array

// example: http://todomvc.com/examples/react/#/