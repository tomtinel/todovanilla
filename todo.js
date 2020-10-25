
const KEY = 'ListOfTodos';

// checks what's in localstorage and puts it in a array
const getData = () => {
    let data = localStorage.getItem(KEY)
    data = JSON.parse(data)
    return Array.from(data); // pb here - object null isn't iterable
}

// checks for new input, pushes into our array, stringify it and add set to localstorage
const setData = () => {
    const input = document.querySelector('#toDoText')
    const data = getData()
    if(input.value != undefined || input.value != ''){
        data.push(input.value)
        const valueJSON = JSON.stringify(data)
        localStorage.setItem(KEY, valueJSON)
    }
}

// creates new li - (data) should be our array
const displayData = (data) => {
    const targetUl = document.querySelector('#listToDo')
    if(data != null){
        for(i=0; i<data.length; i++) {
            let newLi = document.createElement('li')
            newLi.innerHTML = data[i]
            targetUl.append(newLi)
        }
    }
}

const onSubmit = () => {
    setData();
    var state = getData();
    displayData(state);
}

const init = () => {
    var state = getData();
    displayData(state);
}

init();

//     for(i=0; i<finalTodos.length; i++){
//         newLi.innerHTML = finalTodos[i];   
//         targetUl.append(newLi); 
//     }
// }

// li should have a hover (CSS) with a function to delete (-) (JS id? sur qui on a cliqué)

//localstorage (or Cookie ?) for persistant data


// Use a filter on an array (status: active or completed) - 

// Localstorage JSON stringify, and parse for save and load, use a todosService as an interface, turn data into an array

// example: http://todomvc.com/examples/react/#/