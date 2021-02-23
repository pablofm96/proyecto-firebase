<template lang="html">

  <section class="carrito">
    <h1>Carrito</h1>
    <div class="d-flex justify-content-center">
      <div>
        <div v-for="producto in carrito"
        v-bind:key="producto.id" class="row border-bottom my-3 prod">
          <div class="col mx-3">
            <img class="img-fluid" style="width:100px" v-bind:src='producto.foto' alt="nevera.id">
          </div>
          <div class="col mx-2 ">
            <p>{{producto.nombre}}</p>
            <p>{{producto.precio}}€</p>
          </div>
          <div class="col mx-3 pt-4">
            <input type="number" placeholder="1" min=1 :max="producto.stock">
          </div>
          <div class="col mx-3 pt-4">
            <a class="btn-danger btn" v-on:click="borrarArticulo(producto.id)">Borrar</a>
          </div>
        </div>
      </div>
    </div>
    <div class="border p-5">
      <p>Cantidad de productos: {{carrito.length}}</p>
      <a class="btn-success btn mx-3 botonComprar" >Realizar compra</a>
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
      Firebase.auth.onAuthStateChanged(user=>{
        if (user){
          this.user.loggedIn = true;
          this.user.data = user;
          this.$bind('carrito',db.collection('carrito').where("usuario","==",Firebase.auth.currentUser.email))
        }else{
          this.user.loggedIn = false;
          this.user.data = user;
          this.$bind('carrito',db.collection('carrito').where("usuario","==",""))

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
        },

        
    },
    computed: {
     
    },
     firestore: {
      carrito: db.collection('carrito').where("usuario", "==", Firebase.auth.currentUser.email ? Firebase.auth.currentUser.email:"")
    }
}


</script>

<style scoped lang="scss">
  .carrito {
    font-family: $fuenteproductos;
    background-image: $fondo;
  }

  .prod{
    background-color: color(tertiary);
  }

  .botonComprar{
    background-color: color(secondary);
  }

</style>
