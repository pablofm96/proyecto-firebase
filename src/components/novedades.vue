<template lang="html">

  <section class="novedades">
    <h1 class="text-center">Novedades</h1>
    <div class="row justify-content-center m-0">
        <div v-for="novedad in novedades"
        v-bind:key="novedad.id">
          <div class="border m-4">
            <h5>{{novedad.nombre}}</h5>
            <div>
               <img style="object-fit:cover; height: 200px" v-bind:src='novedad.imagen' alt="novedad.id"> 
            </div>
            <p>{{novedad.precio}}</p>
          </div>
        </div>
    </div>
  </section>

</template>

<script lang="js">
  import { db } from '../db'
   import Firebase from '../db'
  export default  {
    name: 'novedades',
    props: [],
    mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn= true;
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
    },
    data () {
      return {
        novedades: [],
         user: {
          loggedIn: false,
          data: {}
        },
      }
    },
    methods: {
      anadirCarrito: function (nombre, precio) {
        
          if (this.user.loggedIn){
             db.collection('carrito').add({
              marca: nombre,
              precio: precio,
              usuario: this.user.data.email
            
            })
          }else{
            console.log("Usuario no registrado");
          }
      }
          
    },
    computed: {
      conectado(){
        return this.user.loggedIn
      }
    },
    
    firestore: {
      novedades: db.collection('novedades')      
    }
}


</script>

<style scoped lang="css">
  .novedades {

  }
</style>
