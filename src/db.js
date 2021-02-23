import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';
//import { data } from 'jquery';


  let usuario = [];
  let carrito = [];
  let conectado = false;
  var firebaseConfig = {
    apiKey: "AIzaSyAPusl9EGAjqDWsrou02qtFK80yvuyH180",
    authDomain: "proyectotienda-dfb06.firebaseapp.com",
    projectId: "proyectotienda-dfb06",
    storageBucket: "proyectotienda-dfb06.appspot.com",
    messagingSenderId: "935012703140",
    appId: "1:935012703140:web:ba0e2b7132aa14d9cebf31"
  };
  
  export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

  export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {
      })
      .catch(function(error) {
        console.log(error)});
    },
    registrar(email, password, nombre){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(data =>
        data.user.updateProfile({
          displayName: nombre
        })  
      )
    },

    loginTwitter(){
      var provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },

    iniciarSesion(email, password){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(data => {
          console.log(data)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    

    obtenerUsuario(){
      firebase.auth().onAuthStateChanged( user => {
        if (user) {
          conectado = true;
          usuario = user;
          console.log("Conectado");
          console.log(conectado);
        }
        else {
          conectado = false;
          usuario = {};
          console.log("Desconectado");
          console.log(conectado);
        }
      })
    },

    correo(){
      if (usuario.email){
        return usuario.email;
      }else{
        return "";
      }
    },

    estado(){
      if(conectado){
        return true;
      }else{
        return false;
      }
    },

     recuperarCarrito(){
       carrito = db.collection('carrito').where("usuario", "==", "pabloferres96@gmail.com");
       return carrito;
    }
    
  }


