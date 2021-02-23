<template lang="html">

  <section class="paneladministrador">
    <h1>Panel de administración</h1>
    <h3>Subir producto</h3>
    <label>Nombre:</label>
    <input type="text" class="form-control" id="nombre"  placeholder="" v-model="nombreNuevo">
    <label>Marca:</label>
    <input type="text" class="form-control" id="marca"  placeholder="" v-model="marcaNuevo">
    <label>Descripción:</label> 
    <input type="text" class="form-control" id="descripcion"  placeholder="" v-model="descripcionNuevo"> 
    <p class="card-text text-center">PVP:</p>
    <input type="text" class="form-control" id="precio"  placeholder="" v-model="precioNuevo"> 
    <p class="card-text text-center">Stock:</p>
    <input type="text" class="form-control" id="stock"  placeholder="" v-model="stockNuevo"> 
    <p class="card-text text-center">Link de la imagen:</p>
    <input type="text" class="form-control" id="imagen"  placeholder="" v-model="imagenNuevo"> 
    <p class="card-text text-center">Link de la imagen:</p>
    <input type="text" class="form-control" id="imagen"  placeholder="" v-model="imagenNuevo2"> 
    <a class="btn-success btn mx-3 mt-3 botonesProductos" v-on:click="subirProducto()">Subir producto</a> 
    <h2>Modificar producto</h2>
    <div v-for="producto in productos"
        v-bind:key="producto.id">
          <div class="row border m-4 col-12" style="width:500px">
            <div class="col-4">
             <img class="imagenProductos" style="width: 200px" v-bind:src='producto.imagen' alt="novedad.id"> 
            </div>
            <div class="col-8 ">
              <div v-if="productoId != producto.id">
                <button v-on:click="mostrar(producto.id)">Modificar</button>
              </div>
              <div v-else>
                <h5>{{producto.nombre}}</h5>
                <label>Nombre:</label>
                <input type="text" class="form-control" id="nombre"  placeholder="" v-model="nombre">
                <label>Descripción:</label> 
                <input type="text" class="form-control" id="descripcion"  placeholder="" v-model="descripcion"> 
                <p class="card-text text-center">PVP:</p>
                <input type="text" class="form-control" id="precio"  placeholder="" v-model="precio"> 
                <p class="card-text text-center">Stock:</p>
                <input type="text" class="form-control" id="stock"  placeholder="" v-model="stock"> 
                <a class="btn-success btn mx-3 mt-3 mb-3 botonesProductos" v-on:click="modificarProducto(producto.id)">Modificar</a> 
                <a class="btn-danger btn mx-3 mt-3 mb-3 botonesProductos" v-on:click="eliminarProducto(producto.id)">Eliminar</a> 
              </div>
            </div>
          </div>
    </div>
  </section>

</template>

<script lang="js">
  import { db } from '../db'

  export default  {
    name: 'paneladministrador',
    props: [],
    mounted () {

    },
    data () {
      return {
        productos: [],
        nombre: "",
        descripcion:"",
        precio:"",
        stock:"",
        productoId: "",
        nombreNuevo:"",
        descripcionNuevo:"",
        precioNuevo:"",
        stockNuevo:"",
        imagenNuevo:"",
        imagenNuevo2:"",
        marcaNuevo:""
      }
    },
    methods: {
      modificarProducto(id){
        if (this.nombre != ""){
          db.collection("neveras").doc(id).update({
            nombre: this.nombre
          })
           this.nombre = ""
        }
        if (this.stock != ""){
          db.collection("neveras").doc(id).update({
            stock: this.stock
          })
          this.stock= ""
        }
        if (this.descripcion != ""){
          db.collection("neveras").doc(id).update({
            descripcion: this.descripcion
         })
         this.descripcion= ""
        }
        if (this.precio != ""){
          db.collection("neveras").doc(id).update({
            precio: this.precio
          })
          this.precio= ""
        }
       
      },

      eliminarProducto(id){
        db.collection("neveras").doc(id).delete()
      },

      mostrar(id){
        if (this.productoId != id){
          this.productoId = id
        }else{
          this.productoId = ""
        }
      },

      subirProducto(){
        db.collection("neveras").add({
          nombre: this.nombreNuevo,
          marca: this.marcaNuevo,
          precio: this.precioNuevo,
          stock: this.stockNuevo,
          imagen: this.imagenNuevo,
          imagen2: this.imagenNuevo,
          descripcion: this.descripcionNuevo
        })

        this.nombreNuevo = "";
        this.precioNuevo = "";
        this.stockNuevo = "";
        this.imagenNuevo = "";
        this.descripcionNuevo = "";
      }

    },
    computed: {

    },

    firestore: {
     productos: db.collection('neveras')      
    }
}


</script>

<style scoped lang="scss">
  .paneladministrador {

  }
</style>
