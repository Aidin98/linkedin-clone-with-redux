import React, { useState } from 'react'
import './Login.css'
import {auth }from './firebase'
import {useDispatch} from 'react-redux'
import {login} from './features/userSlice'
function Login() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [profilePic,setProfilePic]=useState('')
    const dispatch=useDispatch()
    const register=()=>{
        if(!name){
            return alert('Please enter a full name')
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic
            })
            .then(()=>{
                dispatch(login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:userAuth.user.displayName,
                        photoURL:userAuth.user.photoURL
                }))
            })
        }).catch(error=> alert(error.message))
    }
    const loginToApp=(e)=>{
            e.preventDefault()
            auth.signInWithEmailAndPassword(email,password)
            .then((userAuth)=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photoURL:userAuth.user.photoURL
                }))
            }).catch(error=> alert(error.message))

    }
    return (
        <div className='login'>
           <img src='https://www.pinclipart.com/picdir/middle/180-1804091_2019-supply-chain-solutions-linkedin-email-signature-linkedin.png' alt='linkedin' />
            <form>
                <input type='text' placeholder='Full name (required if registering)' value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type='text' placeholder='Profile picture URL (optional)'  value={profilePic} onChange={(e)=> setProfilePic(e.target.value)}/>
                <input type='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type='password' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type='submit' onClick={loginToApp}>Sign in</button>
            </form>
            <p>Not a meneber! {'  '} <span className='login__register' onClick={register}>Register Now</span></p>
            
        </div>
    )
}

export default Login
