import React from 'react'
import firebase from 'firebase/compat/app';
import '../componentsStyle/SignIn.css'



function SignIn(props) {
  const auth = props.auth

  const signInWithGoogle = (props) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className='signIn'>
    <h1>Authorization</h1>
      <button className='signIn_button' onClick={signInWithGoogle}><img className='img_button_google' src='https://cdn-teams-slug.flaticon.com/google.jpg'></img>
        Sign in with Google</button>
    </div>

  )

}

export default SignIn
