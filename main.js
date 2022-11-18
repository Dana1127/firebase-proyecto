import {addTask, getAllTasks} from './firebase.js'

const button = document.getElementById('submit-button')
button.addEventListener('click', (e)=> clickForm(e))

const tasks = await getAllTasks() //Retorna lo que mandamos a la db con la funcion

function clickForm(e){
  e.preventDefault()  
  console.log('prevent event')
  const title = document.getElementById('taskTitle').value
  const description = document.getElementById('taskDescription').value

  addTask(title, description)
  //console.log(e)
}