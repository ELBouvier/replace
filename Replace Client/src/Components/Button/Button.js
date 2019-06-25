import React, {useState} from 'react';
import './Button.css';

let BigButton= (props) => {
      const [ setter, setSetter] = useState('');
  

      const handleSubmit = (event) => {
          event.preventDefault();
        
          let x = sessionStorage.getItem('selectedName')
          let y = sessionStorage.getItem('selectedValue')
          setSetter('test');
        
          fetch('http://localhost:3000/color/colorplace', {
              method: 'POST',
              body:JSON.stringify({
                color: {
                colorName: x,
                colorVal: y,
                setter: setter
            }}),
              headers: new Headers({
                  'Content-Type' : 'application/json'
              }),
          })
          .catch(err => console.log(err))
      }
  
      return(
         <button onClick={handleSubmit}>Declare!</button>
      )
  }

export default BigButton;