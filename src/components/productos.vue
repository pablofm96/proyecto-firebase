<template lang="html">

  <section class="productos">
    <h2 class="pt-3 border-top">Neveras</h2>
    <div class="row m-0 justify-content-center border-bottom">
      <div v-for="nevera in neveras"
        v-bind:key="nevera.id">
          <div class="row py-3 m-4 col-12 carta" style="width:500px; border-radius:20px">
            <div class="col-4">
             <img class="imagenProductos1 rounded"  style="float:left" v-bind:src='nevera.imagen' alt="novedad.id">
             <img class="imagenProductos2 rounded"  style="float:left" v-bind:src='nevera.imagen2' alt="novedad.id">  
            </div>
            <div class="d-flex row col-8 align-items-center justify-content-center pl-5 prod">
              <h5>{{nevera.nombre}}</h5>
              <p class="card-text text-center">{{nevera.descripcion}}</p>
              <p class="card-text text-center">PVP: <span>{{nevera.precio}}</span></p>
              <a class="btn-success btn mx-3" v-if="conectado&&nevera.stock>0" v-on:click="anadirCarrito(nevera.nombre, nevera.imagen, nevera.precio, nevera.id, nevera.stock)">Añadir al carrito <font-awesome-icon :icon="['fas', 'cart-plus']" /></a> 
            </div>
          </div>
      </div>
    </div>
    
  </section>

</template>

<script lang="js">
  import { db } from '../db'
  import Firebase from '../db'

  export default  {
    name: 'productos',
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
        neveras: [],
        user: {
          loggedIn: false,
          data: {}
        },
      }
    },
    methods: {
       //Funciones carrito
        anadirCarrito: function (nombre,foto,precio,id,stock){
          //this.div=false;
          db.collection("carrito").doc(nombre+this.user.data.email).set({
            nombre: nombre,
            precio: parseInt(precio),
            foto: foto,
            cantidad: 1,
            productoid: id,
            stock: stock,
            usuario: this.user.data.email
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
        this.$notify({
            group: 'foo',
            type: 'success',
            position:'bottom left',
            title: 'Enhorabuena',
            text: 'Producto añadido al carrito'
            })
        },

    },
    computed: {
      conectado(){
        return this.user.loggedIn
      }
    },

    firestore: {
      neveras: db.collection('neveras')      
    }
}


</script>

<style scoped lang="scss">
  
  .productos {
    font-family: $fuenteproductos;
    background-image: $fondo;
  }

  .imagenProductos1 {
    @include imagen1
  }

  .imagenProductos2 {
    @include imagen2
  }
  .prod{
    color: color(primary);
    background-color: color(tertiary);
    
  }
  .carta:hover .imagenProductos1 {
          opacity:0;
          transition:1s;

  }

  .btn{
    background-color: color(secondary);
  }
</style>
