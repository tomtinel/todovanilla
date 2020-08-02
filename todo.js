const createToDo = () => {
    event.preventDefault()

    const input = document.querySelector('#toDoText')
    const newLi = document.createElement('li') // id ?
    const targetUl = document.querySelector('#listToDo')

    if(input.value == ''){
        return console.log('input empty you dumbass MOFO');
    }
    newLi.innerHTML = input.value;   
    targetUl.append(newLi);
    input.value = '';
};

// li should have a hover (CSS) with a function to delete (-) (JS id? sur qui on a cliqué)

//localstorage (or Cookie ?) for persistant data