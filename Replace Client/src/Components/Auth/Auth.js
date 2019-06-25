import React, { useState } from 'react';
import './Auth.css';


const Auth = (props) => {
    const [ login, setlogin ] = useState(false);
    const [ firstName, setFirstName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] =useState('');

    const loginToggle = (event) => {
    event.preventDefault();
    setlogin(!login);

    setFirstName('');
    setEmail('');
    setPassword('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let url = login ? 'http://localhost:3000/user/create': 'http://localhost:3000/user/login';

        let reqBody = {
            user: {
                firstName: firstName,
                email: email,
                password: password
            }
        }        

        sessionStorage.setItem('currentName', firstName)

        fetch(url, {
            method: 'POST',
            body:JSON.stringify(reqBody),
            headers: {
                'Content-Type' : 'application/json'
            },
        })
        .then (res => res.json())
        .then (data => props.storeToken(data.sessionToken))
        .catch(err => console.log(err))
    }

    return(
        <form autoComplete="off" className="card" classID='LoginCard' onSubmit={(e) => handleSubmit(e)}>       
        
        { login ? 
            <div>
            <h2>Sign Up</h2>
            <input onChange={(e) => setFirstName(e.target.value)} value={ firstName } type="text" placeholder='The people me nighthawk.' name="firstName" />
            <br/>
            <input onChange={(e) => setEmail(e.target.value)} value={ email } type="text" placeholder='Myspacemaster777@hotmail.' name="email" />
            <br/>
            <input onChange={(e) => setPassword(e.target.value)} value={ password } type="password" placholder='Your password' name="email" />
            <br/>
            <button className="LoginButton" type="submit">Submit</button>
            <br/>
            <a href="/" onClick={(e) => loginToggle(e)}>Wait! No go back.</a>
            </div>

            :
            
            <div>
            <h2>Welcome back!</h2>
            <input onChange={(e) => setFirstName(e.target.value)} value={ firstName } type="text" placeholder='What should we call you?.' name="firstName" />

            <input onChange={(e) => setEmail(e.target.value)} value={ email } placeholder='Your Email' type="text" name="email" />
            <br/>
            <input onChange={(e) => setPassword(e.target.value)} value={ password } type="password" placeholder='Your Password' name="email" />
            <br/>
            <button className="LoginButton" type="submit">Login!</button> 
            <br/>
            <a href="/" onClick={(e) => loginToggle(e)}>New User? Click here to sign up.</a>

            </div> 
        }
        </form>
    )
}

export default Auth;

//CREATE A GET REQUEST THAT FIRES WHEN A USER IS LOGGED IN WHICH UPDATES THE 'HAS MADE IT CLEAR' SECTION SO THAT IT SHOWS PREVIOUS USER'S NAME AND COLOR CHOSEN

//MAKE VIDEO BACKGROUND PLAY WITH A FILTER OVER IT THE COLOR THAT IS SELECTED