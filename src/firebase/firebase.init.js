
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3yJ8p19zdJRCuXTxoUL_wyT2BOU4b-zE",
    authDomain: "nerw-project-83116.firebaseapp.com",
    projectId: "nerw-project-83116",
    storageBucket: "nerw-project-83116.firebasestorage.app",
    messagingSenderId: "55081429306",
    appId: "1:55081429306:web:aeaf1b625f937dde91c803"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);