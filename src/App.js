import React from 'react';

import User              from './Components/User'

import './App.css';
import Favourites from './Components/Favourites';



function App() {

  return (
    <div style={{padding:"3rem",display:"flex", justifyContent: "space-around"}}>
        <User/>
        <Favourites/>
    </div>
  );
}

export default App;
