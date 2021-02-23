<template lang="html">

  <section class="novedades">
    <h1 class="text-center">Novedades</h1>
    <div class="row justify-content-center m-0">
        <div v-for="novedad in novedades"
        v-bind:key="novedad.id">
          <div class="col m-4">
            <div class="tituloNovedades">
              <h3>Proximamente</h3>
            </div>
            <h5>{{novedad.nombre}}</h5>
            <div>
               <img class="imagenNovedades" v-bind:src='novedad.imagen' alt="novedad.id"> 
            </div>
            <p>PVP: <span>{{novedad.precio}}</span></p>
             <a class="btn-success btn mb-3">Avisame cuando este disponible <font-awesome-icon :icon="['fas', 'envelope']" /></a>
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

<style scoped lang="scss">
  .novedades {
    font-family: $fuenteproductos;
  }

  .tituloNovedades {
    border-bottom: 2px solid black;
  }

  .imagenNovedades {
    @include imagen(200px);
  }

  .btn{
    background-color: color(secondary);
  }
</style>
