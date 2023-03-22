const { createApp } = Vue

  createApp({
    data() {
      return {
        mail: [],
        finito:false
      }
    },
    
    created() {
        for(let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
            this.mail.push(res.data.response);
            if(i==9)this.finito=true
        })
        }
    }
  }).mount('#app')