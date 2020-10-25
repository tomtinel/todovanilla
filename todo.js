const KEY = 'ListOfTodos';

// checks what's in localstorage and puts it in a array
const getData = () => {
    let data = localStorage.getItem(KEY)
    data = JSON.parse(data)
    if(data == null){
        data = []
    }
    else {
        Array.from(data)
    }
    return data
}

// checks for new input, pushes into our array, stringify it and add set to localstorage
const setData = () => {
    const input = document.querySelector('#toDoText')
    const data = getData()
    if(input.value != undefined || input.value != ''){
        data.push({
            content: input.value,
            status: 'active',
        })
        const valueJSON = JSON.stringify(data)
        localStorage.setItem(KEY, valueJSON)
    }
}

// creates new li - (data) should be our array
const displayData = (data) => {
    const targetUl = document.querySelector('#listToDo')
            targetUl.innerHTML = ''
    if(data != null){
        for(i=0; i<data.length; i++) {
            let newLi = document.createElement('li')
            let cross = document.createElement('div')

            newLi.id = i
            newLi.classList.add(data[i].status)
            newLi.innerHTML = data[i].content
            newLi.onclick = (event) => {
                toggle(event)
            }
            
            cross.innerHTML = 'X'
            cross.classList.add('deleteButton')
            cross.dataset.idli = i
            cross.onclick = (event) => {
                onDelete(event)
            }
            
            newLi.append(cross)
            targetUl.append(newLi)
        }
      }
}

const toggle = () => {
    const id = event.currentTarget.id
    let data = getData()
    if(data[id].status == 'active'){
        data[id].status = 'completed'       
    }else{
        data[id].status = 'active'
    }
    const valueJSON = JSON.stringify(data)
    localStorage.setItem(KEY, valueJSON)
    displayData(data)
}

const onDelete = (event) => {
    const id = event.currentTarget.dataset.idli
    let data = getData()
        data.splice(id, 1)
        console.log(data);
    const valueJSON = JSON.stringify(data)
    localStorage.setItem(KEY, valueJSON)
    displayData(data)
    }

const onSubmit = () => {
    event.preventDefault()
    setData();
    var state = getData()
    displayData(state)
}

const init = () => {
    var state = getData()
    displayData(state)
}

init()

// li should have a hover (CSS) with a function to delete (-) (JS id? sur qui on a cliqué)

// Use a filter on an array (status: active or completed) - 

// example: http://todomvc.com/examples/react/#/