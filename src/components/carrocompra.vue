<template lang="html">

  <section class="carrito">
    <h1>Carrito</h1>
    <div class="d-flex justify-content-center">
      <div>
        <div v-for="producto in carrito"
        v-bind:key="producto.id" class="row border-bottom my-3">
          <div class="col mx-3">
            <img class="img-fluid" style="width:100px" v-bind:src='producto.foto' alt="nevera.id">
          </div>
          <div class="col mx-2">
            <p>{{producto.nombre}}</p>
            <p>{{producto.precio}}</p>
          </div>
          <div class="col mx-3">
            <input type="number" v-model="cantidad">
          </div>
          <div class="col mx-3">
            <a class="btn-danger btn" v-on:click="borrarArticulo(producto.id)">Borrar</a>
          </div>
        </div>
      </div>
    </div>
    <div class="border p-5">
      <p>{{carrito.length}}</p>
      <a class="btn-success btn mx-3" >Realizar comprar</a>
      <a class="btn-danger btn" >Vaciar carrito</a>
    </div>
  
  </section>

</template>

<script lang="js">
  import { db } from '../db'
  import Firebase from '../db'
  export default  {
    name: 'carrito',
    props: [],
     mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
          console.log("Conectado");
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
          console.log("Desconectado");
        }
      })
    },
    data () {
      return {
        carrito: [],
        cantidad: 1,
        //cantidad: this.carrito.cantidad,
        user: {
          loggedIn: false,
          data: {}
        },
      }
    },
    methods: {
      
        borrarArticulo: function(id){
          db.collection('carrito').doc(id).delete();
        }
        
    },
    computed: {
     
    },
     firestore: {
      carrito: db.collection('carrito').where("usuario", "==", Firebase.auth.currentUser.email ? Firebase.auth.currentUser.email:"")
    }
}


</script>

<style scoped lang="css">
  .carrito {

  }
</style>
