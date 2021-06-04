import firebase from "firebase/app";
import 'firebase/storage'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

const fire = firebase.initializeApp(config)
const storage = firebase.storage()

export {
  fire,
  storage,
  firebase//A veces firebase maneja sus propios tipos de datos, si alguna vez lo pide, esos tipos de datos están acá
}