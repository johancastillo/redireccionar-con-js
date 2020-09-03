const app = new Vue({
  el: '#app',
  data: {
    title: 'App with Vue.js',
    name: "",
    pass: ""
  },
  methods: {
    hola(){
      alert(this.pass)
    }
  }
})

/* var name = "johan"
const redirect = () => {
  if(nameUser == name && passUser == pass){
    window.location.href = 'newPage.html'
  }else{
    alert('Datos incorrectos')
  }
};
*/
