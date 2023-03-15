const { createApp } = Vue

createApp({
  data() {
    return {
      toDos: [
        {
          text : 'pane',
          done: true
        },
        {
          text : 'formaggio',
          done: true
        },
        {
          text : 'farina',
          done: false
        },
        {
          text : 'latte',
          done: true
        },
        {
          text : 'salmone',
          done : false
        }
      ],

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
        }
    }
}).mount('#app')

    


  

