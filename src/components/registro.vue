<template lang="html">

  <section class="registro">
    <form>
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" class="form-control" id="nombre"  placeholder="" v-model="nombre" required>
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="" v-model="correo" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" id="password" placeholder="" v-model="password">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" id="password1" placeholder="" v-model="password2">
      </div>
      <button type="button" class="btn btn-primary" v-if="comprobarPassword()" v-on:click="registrarse" >Registrar</button>
    </form>
    <form>
      <div class="row">
        <div class="col">
          <input type="email" class="form-control" placeholder="" v-model="emailSesion">
        </div>
        <div class="col">
          <input type="password" class="form-control" placeholder="" v-model="passwordSesion">
        </div>
    </div>
    <button type="button" class="btn btn-primary mt-3" v-on:click="iniciarSesion(emailSesion, passwordSesion)">Iniciar sesión</button> 
  </form>
    <button type="button" class="btn btn-primary mt-3" v-on:click="login">Registrarse con Google</button> 
    <button type="button" class="btn btn-primary mt-3" v-on:click="loginTwitter">Registrarse con Twitter</button> 
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

<style scoped lang="css">
  .registro {

  }
</style>
