import React, {useState} from 'react';

import User              from './Components/User';
import Comment           from './Components/Comment';
import Product           from './Components/Product';

import './App.css';



function App() {

  return (
    <div style={{padding:"3rem",display:"flex", justifyContent: "space-around"}}>
        <User/>
        <Comment/>
        <Product/>
    </div>
  );
}

export default App;
