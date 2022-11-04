const button = document.getElementById('submit-button')
button.addEventListener('click', (e)=> clickForm(e))


function clickForm(e){
  e.preventDefault()  
  console.log('prevent event')
}