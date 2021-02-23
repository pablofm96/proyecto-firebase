<template lang="html">

  <section class="registro">
    <h2>Registro</h2>
    <form>
      <div class="row text-left">
        <div class="form-group col-12 col-md-6">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" id="nombre"  placeholder="" v-model="nombre" required>
        </div>
        <div class="form-group col-12 col-md-6">
          <label for="email">Correo electrónico</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="" v-model="correo" required>
        </div>
        <div class="form-group col-12 col-md-6">
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="password" placeholder="" v-model="password">
        </div>
        <div class="form-group col-12 col-md-6">
          <label for="password">Contraseña</label>
          <input type="password" class="form-control" id="password1" placeholder="" v-model="password2">
        </div>
        <div class="d-flex col-12 justify-content-center" v-if="comprobarPassword()">
           <a class="btn-success btn mx-3 mt-3 mb-3" v-on:click="registrarse()">Registrar</a> 
        </div>
        </div>
    </form>
    <h2 class="margen">Iniciar Sesión</h2>
    <form>
      <div>
        <div class="row text-left">
          <div class="form-group col-12 col-md-6">
             <label for="email">Correo</label>
            <input type="email" class="form-control" placeholder="" v-model="emailSesion">
          </div>
          <div class="form-group col-12 col-md-6">
             <label for="password">Contraseña</label>
              <input type="password" class="form-control" placeholder="" v-model="passwordSesion">
          </div>
      </div>
      <a class="btn-success btn mx-3 mt-3 mb-3" v-on:click="iniciarSesion(emailSesion, passwordSesion)">Iniciar sesión</a> 
      <a class="btn-success btn mx-3 mt-3 mb-3" v-on:click="login"><font-awesome-icon :icon="['fab', 'google']" /></a> 
      <a class="btn-success btn mx-3 mt-3 mb-3" v-on:click="loginTwitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a> 
    </div>
  </form>
    
  </section>

</template>

<script lang="js">
  import Firebase from '../db'
  export default  {
    name: 'registro',
    props: [],
    mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
          console.log("Conectado");
          if(this.user.loggedIn){
            this.$notify({
            group: 'foo',
            type: 'success',
            position:'bottom left',
            title: 'Bienvenido',
            text: 'Inicio de sesion con exito'
            })
          }
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
        correo: "",
        password: "",
        password2: "",
        nombre:"",
        passwordIguales: false,
        emailSesion:"",
        passwordSesion:"",
        user: {
          loggedIn: false,
          data: {}
        },
      }
    },
    methods: {
      login() {
          Firebase.login();
          this.$router.replace({ name: "vistaproductos"});
        },
      loginTwitter(){
        Firebase.loginTwitter();
      },
      iniciarSesion(){
        Firebase.iniciarSesion(this.emailSesion, this.passwordSesion);
    },
    
      registrarse(){
        Firebase.registrar(this.correo, this.password, this.nombre)
    },

    comprobarPassword(){
      if (this.password == this.password2 && this.password != ""){
        return true;
      }else{
       return false;
      }
    }
  },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .registro {
    background-image: $fondo;
  }

  .margen {
    margin-top: margen(3px)
  }
</style>
