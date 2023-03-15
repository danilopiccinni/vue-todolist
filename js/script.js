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

  
}).mount('#app')

