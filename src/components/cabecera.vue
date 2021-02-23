<template lang="html">

  <section class="cabecera">
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          ElectronicMark
        </a>
        <div class="row mr-3">
          <router-link to="/vistaadmin">
             <button type="button" class="btn btn-primary mr-3">Panel administracion</button> 
          </router-link>
          <router-link to="/vistacarrito">
             <button type="button" class="btn btn-primary mr-3">Carrito ({{carrito.length}})</button> 
          </router-link>
          <div v-if=!this.user.loggedIn>
            <router-link to="/vistaregistro"> |
               <button type="button" class="btn btn-primary">Registro</button> 
            </router-link>
          </div>
          <div v-else>
              <a class="btn-success btn mx-3" v-on:click="logout">Logout <font-awesome-icon :icon="['fas', 'power-off']" /></a>
          </div>
          
        </div>
        </nav>
    </div>
    
  </section>
  

</template>

<script lang="js">

  //import { db } from '../db'
  import Firebase from '../db'
  import firebase from 'firebase'
  

  export default  {
    name: 'cabecera',
    props: [],

    mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
          console.log(this.user.data)
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
        datos: [],
        user: {
          loggedIn: false,
          data: {}
        },
        carrito: [],
        email: ""
      }
    },
    methods: {
        //Funcion del login
        // login() {
        //   Firebase.login();
        // },
        logout(){
          firebase.auth().signOut().then(() =>{
          this.$router.push({name: 'vistaproductos'})
        })
        },

        correo(){
          Firebase.correo();
        }

        },

       
        // recuperarCarrito: function () {
        //   db.collection('carrito').where("usuario", "==", this.correo)
        //     .get()
        //     .then(function(querySnapshot){
        //       querySnapshot.forEach(function(doc){
        //         console.log(doc.id, "=>", doc.data());
        //       });
        //     })
        //     .catch(function(error){
        //         console.log("Error", error);
        //     })
        // } 
      
    computed: {
      /*correo() {
        if (this.user.data.email){
          return this.user.data.email;
        }else{
          return null;
        }
      }*/
    },

    firestore: {
      //carrito: db.collection('carrito').where("usuario", "==", Firebase.auth.currentUser.email ? Firebase.auth.currentUser.email:"")
    }
}


</script>

<style scoped lang="css">
  .cabecera {

  }
</style>
