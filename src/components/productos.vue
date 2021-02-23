<template lang="html">

  <section class="productos">
    
    <div class="row m-0 justify-content-center">
      <div v-for="nevera in neveras"
        v-bind:key="nevera.id">
          <div class="row border m-4 " style="width:400px">
            <div class="col-4">
             <img style="object-fit:cover; height: 200px" v-bind:src='nevera.imagen' alt="novedad.id"> 
            </div>
            <div class="col-8 ">
              <p class="card-text text-center">{{nevera.descripcion}}</p>
              <p class="card-text text-center">{{nevera.precio}}</p>
              <button type="button" class="btn btn-primary" v-if="conectado&&nevera.stock>0" v-on:click="anadirCarrito(nevera.nombre, nevera.imagen, nevera.precio, nevera.id, nevera.stock)">Añadir al carrito</button> 
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
        },


        obtenerCarrito: function(){
          /*this.carrito = db.collection('carrito').where("usuario", "==", "pabloferres96@gmail.com");
          console.log(this.carrito);*/
          console.log(Firebase.recuperarCarrito());
        }

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

<style>
  .productos {
  }
</style>
