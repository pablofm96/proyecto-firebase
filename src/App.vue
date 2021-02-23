<template>
  <div id="app">
    <Cabecera/>
    <router-view/>
    <notifications group="foo"/>
    <Novedades/>
    <Pie/>
  </div>
</template>

<script>
import Cabecera from './components/cabecera.vue'
import Pie from './components/pie.vue'
import Novedades from './components/novedades.vue'

//import Productos from './components/productos.vue'


export default {
  name: 'App',
  components: {
    Cabecera, 
    Pie,
    Novedades
    //Productos
  }
}
</script>
<style lang="scss">
@import "./scss/mixins";
@import "./scss/variables";
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&family=Oswald:wght@500&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: color(primary);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
