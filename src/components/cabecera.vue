<template lang="html">

  <section class="cabecera">
    <div>
      <nav class="navbar  navbarCabecera">
        <a class="navbar-brand tituloNavbar" href="/">
          <img src="../assets/logo.png" style="width:100 height:30" alt="logoTienda">
        </a>
        
        <div class="row mr-3">
          <router-link to="/vistacarrito">
             <!-- <button type="button" class="btn btn-primary mr-3">Carrito ({{carrito.length}})</button> -->
             <a class="btn-success btn mx-3 botonesCabecera">Carrito <font-awesome-icon :icon="['fas', 'shopping-cart']" /></a>
          </router-link>
          <router-link to="/vistaadmin">
            <a class="btn-success btn mx-3 botonesCabecera" v-if=this.admin>Panel administrador</a>
          </router-link>
          <div v-if=!this.user.loggedIn>
            <router-link to="/vistaregistro"> |
               <a class="btn-success btn mx-3 botonesCabecera">Registro</a>
            </router-link>
          </div>
          <div v-else>
              <a class="btn-danger btn mx-3" v-on:click="logout">Logout <font-awesome-icon :icon="['fas', 'power-off']" /></a>
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
          if (user.email == "administrador@gmail.com"){
            this.admin = true;
          }
          
          console.log(this.user.data)
          console.log("Conectado");
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
          console.log("Desconectado");
          this.admin = false;
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
        email: "",
        admin: false
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

       
      
    computed: {
    },

    firestore: {
    }
}


</script>

<style scoped lang="scss">
  
  .cabecera {
    font-family: $fuentecabecerapie;
  }

  .navbarCabecera{
    background-color: color(primary);
  }

  .tituloNavbar{
    color: color(tertiary);
  }

  .botonesCabecera {
    background-color: color(secondary);
  }
</style>
