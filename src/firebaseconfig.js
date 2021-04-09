import firebase from 'firebase'
import 'firebase/auth'

//conectando con el servidor de firebase
const firebaseConfig = {
    apiKey: "AIzaSyCrze-Mle-F7xJgE_24xZJjhEteFgl0AKQ",
    authDomain: "prueba-react-e7342.firebaseapp.com",
    projectId: "prueba-react-e7342",
    storageBucket: "prueba-react-e7342.appspot.com",
    messagingSenderId: "558899744990",
    appId: "1:558899744990:web:6ddb10d6b54b6d86bbb24f",
    measurementId: "G-KXXKEF7YFK"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  //tenemos en auth todo el servicio de autenticación 
  const auth = fire.auth()

  export {auth}