import React from 'react';

import User from './Components/User'
import './App.css';
import styled from 'styled-components';


function App() {

    const AppWrapper = styled.div`
        padding:3rem;

        @media (max-width:900px){
            padding:2rem;
        } 

        @media (max-width:800px){
            padding:1rem;
        }
    `

    return (
        <AppWrapper>
            <User />
        </AppWrapper>
    );
}

export default App;
