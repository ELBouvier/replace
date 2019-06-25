import React, { useState } from 'react';
import Auth from './Components/Auth/Auth';
import Popper from './Components/Popper/Popper';
import Palette from './Components/Palette/Palette';
import BigButton from './Components/Button/Button';
import './App.css';

function App() {
  const [ token, setToken ] = useState(undefined);

  const storeToken= (token) => {
    setToken(token);
  };
  
  const clearToken= () => {
    setToken(undefined);
  };

  return (
    <div className="App">
      <Popper className="PopperContainer" clearToken= { clearToken } />
 
       { 
         token ?
         <div>
            <div>
            <Palette />
            <BigButton />
            </div>
            <h3>{sessionStorage.getItem('currentName')} HAS MADE IT CLEAR,</h3>
            <h4 id="testhead2">THE OFFICIAL BEST COLOR IN THE WORLD IS:</h4>
              <div className='bigbertha'>
              <span classID="testhead" id="testhead"></span>
              </div>
            <h1 id="declaration"></h1>

         </div>
         :
         <Auth storeToken={ storeToken } />
       } 
    </div>
  );
}

export default App;
