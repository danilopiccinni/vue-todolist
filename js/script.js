const { createApp } = Vue

createApp({
  data() {
    return {
      toDos: [],

      nuovaCosa: '',

      newToDo : {},

    }
  },

  methods: {
    
      rimuoviToDo(index) {
          this.toDos.splice(index , 1)
        },

        aggiungiLaCosa() {

            if (this.nuovaCosa == '') {
                alert('inserisci una cosa da fare')
            } else {
                this.newToDo = {
                    text : this.nuovaCosa,
                    done : false,
                },

                this.toDos.push(this.newToDo)

                this.nuovaCosa = ''
            }
        },

        fattoNonFatto(index) {
            if (this.toDos[index].done) {
                this.toDos[index].done = false
            } else {
                this.toDos[index].done = true
            }
        },

        svuota(){

            this.toDos = []
        },

        focus() {
            let input = document.getElementById('cosa-da-inserire');
            input.focus()
        }
    }
}).mount('#app')

    


  

