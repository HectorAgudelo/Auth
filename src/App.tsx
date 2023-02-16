import React from 'react';
import './App.css';

import { AuthDetails } from './config/AuthDetails';
import {Login} from './pages/Login'
import {SignUp} from './pages/SignUp'




function App() {
  return (
    <div className="App">   
        <SignUp/>
        <Login/>
        <AuthDetails/>
    </div>
  );
}

export default App;


