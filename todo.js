const todos = [];

const key = 'ListOfTodos';
const input = document.querySelector('#toDoText')
const newLi = document.createElement('li') // id ?
const targetUl = document.querySelector('#listToDo')

    var finalTodos = localStorage.getItem(key);
    finalTodos = JSON.parse(finalTodos)

    for(i=0; i<finalTodos.length; i++){
        newLi.innerHTML = finalTodos[i];   
        targetUl.append(newLi); 
    }

const createToDo = (key, input, newLi, targetUl) => {
    event.preventDefault()

    if(input.value == ''){
        return console.log('input empty you silly');
    }
    
    todos.push(input.value);
    const strTodos = JSON.stringify(todos);
    localStorage.setItem(key, strTodos);
     var finalTodos = localStorage.getItem(key);
    finalTodos = JSON.parse(finalTodos)

    for(i=0; i<finalTodos.length; i++){
        newLi.innerHTML = finalTodos[i];   
        targetUl.append(newLi); 
    }
    
    input.value = '';
};

// li should have a hover (CSS) with a function to delete (-) (JS id? sur qui on a cliqué)

//localstorage (or Cookie ?) for persistant data


// Use a filter on an array (status: active or completed) - 

// Localstorage JSON stringify, and parse for save and load, use a todosService as an interface, turn data into an array

// example: http://todomvc.com/examples/react/#/