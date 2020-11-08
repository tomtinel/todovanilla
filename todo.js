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
    
    if(input.value != undefined && input.value != ''){
        data.push({
            content: input.value,
            status: 'active',
        })
        const valueJSON = JSON.stringify(data)
        localStorage.setItem(KEY, valueJSON)
        input.value = ''
    }
}

// creates new li - (data) should be our array
const displayData = () => {
    const data = getData()
    // on delete tout
    const targetUl = document.querySelector('#listToDo')
            targetUl.innerHTML = ''
    if(data != null){
        for(i=0; i<data.length; i++) {
            let newLi = document.createElement('li')
            let content = document.createElement('div')
            let cross = document.createElement('div')

            content.id = i
            content.classList.add(data[i].status)
            content.innerHTML = data[i].content

            content.onclick = (event) => {
                toggle(event)
            }
            
            cross.innerHTML = 'X'
            cross.classList.add('deleteButton')
            cross.dataset.idli = i
            cross.onclick = (event) => {
                onDelete(event)
            }
            newLi.append(cross)
            newLi.append(content)
            targetUl.append(newLi)
        }
    }
}

const toggle = (event) => {
    const id = event.currentTarget.id
    let data = getData()

    if(data != undefined && data[id].status == 'active'){
        data[id].status = 'completed'       
    }else{
        data[id].status = 'active'
    }

    const valueJSON = JSON.stringify(data)
    localStorage.setItem(KEY, valueJSON)

    displayData()
}

const onDelete = (event) => {
    const id = event.currentTarget.dataset.idli
    let data = getData()

    data.splice(id, 1)
    
    const valueJSON = JSON.stringify(data)
    localStorage.setItem(KEY, valueJSON)

    displayData()
}

const onSubmit = () => {
    event.preventDefault()
    setData();
    
    displayData()
}

displayData()