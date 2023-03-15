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

    }
  },

  methods: {

    rimuoviToDo(index) {
      this.toDos.splice(index , 1)
    },

  }

  
}).mount('#app')

