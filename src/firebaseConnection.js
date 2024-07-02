import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD3TxKnxBG9Zdp0O12jJCFJqKbFQfoPffI",
    authDomain: "projeto-arquivo.firebaseapp.com",
    projectId: "projeto-arquivo",
    storageBucket: "projeto-arquivo.appspot.com",
    messagingSenderId: "349674448535",
    appId: "1:349674448535:web:5dda488056670e1a8d6bd2",
    measurementId: "G-3RP37VGMJJ"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  export { db };