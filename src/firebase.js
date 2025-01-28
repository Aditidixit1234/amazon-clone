import firebase from "@firebase/app"


const firebaseConfig={
    apiKey: "AIzaSyDtbAclveWc1SaP_z1VRbnGGFiLivD8vAM",
  authDomain: "hello2-f517c.firebaseapp.com",
  projectId: "hello2-f517c",
  storageBucket: "hello2-f517c.appspot.com",
  messagingSenderId: "836945498070",
  appId: "1:836945498070:web:022c25514eab68df47de77",
  measurementId: "G-Q8XBZGFHBH",
  
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db =firebaseApp.fireStore();
const auth = firebase.auth();
export {db,auth};