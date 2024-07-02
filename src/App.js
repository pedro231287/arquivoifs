
import React from 'react';
import RouteApp from './routes';
import { db } from './firebaseConnection'
import { doc, setDoc } from 'firebase/firestore'

const App = () => {
  

  return (
    <RouteApp/>
  );
};



export default App;
