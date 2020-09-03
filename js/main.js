const app = new Vue({
  el: '#app',
  data: {
    title: 'App with Vue.js'
  },
  methods: {
    hola(){
      alert('Hola Mundo')
    }
  }
})

/* var name = "johan"
var pass = "12345"

var inputName = document.getElementById('name')
var passUser = document.getElementById('pass')

var nameUser = inputName.value;

//Detectar cambios en los inputs
function a(){
  alert(nameUser.value)
}

function b(){alert('B')}


const redirect = () => {
  if(nameUser == name && passUser == pass){
    window.location.href = 'newPage.html'
  }else{
    alert('Datos incorrectos')
  }
};
*/
