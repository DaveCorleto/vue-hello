const { createApp } = Vue;

// Creo l'App con Vue 

createApp ({
   data(){
    return { 
        message: 'Hello Vue!',
        image: '"./img/20190909_134727.jpg"',               
}
   } 
}).mount('#app');