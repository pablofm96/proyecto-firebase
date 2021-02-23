<template>
  <div id="app">
    <div v-if="neveras">
      <Cabecera/>
      <router-view/>
      <notifications group="foo"/>
      <Novedades/>
      <Pie/>
    </div>
    <div v-if="!neveras">
      <Preload/>
    </div>
  </div>
</template>

<script>
import Cabecera from './components/cabecera.vue'
import Pie from './components/pie.vue'
import Novedades from './components/novedades.vue'
import Preload from './components/preload.vue'
import {db} from "./db.js"

//import Productos from './components/productos.vue'


export default {
  name: 'App',
  components: {
    Cabecera, 
    Pie,
    Novedades,
    Preload
    //Productos
  },
  data() {
    return {
      neveras: null
    }
  },
  firestore: {
    neveras: db.collection('neveras')  
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
