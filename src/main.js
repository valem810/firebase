import "bootstrap/dist/css/bootstrap.min.css"; // CSS de Bootstrap
import "bootstrap"; // JavaScript de Bootstrap

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"; // Importar Firestore
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBmF1iZ6HcPSgaYqt6iGZ30gt5G84xvy6k",
    authDomain: "fir-96ea7.firebaseapp.com",
    projectId: "fir-96ea7",
    storageBucket: "fir-96ea7.appspot.com",
    messagingSenderId: "949587150750",
    appId: "1:949587150750:web:1d1ab7cb689a5b5c9e388f",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore y exportar
export const db = getFirestore(app); // Exportar la instancia de Firestore

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        const usuarioActivo = {
            email: user.email,
            uid: user.uid,
        };
        store.dispatch("detectarUsuario", usuarioActivo);
        console.log(usuarioActivo);
        // ...
    } else {
        console.log(user);
        store.dispatch("detectarUsuario", user);
        // User is signed out
        // ...
    }
});
// Crear la aplicación de Vue
createApp(App).use(store).use(router).mount("#app");
