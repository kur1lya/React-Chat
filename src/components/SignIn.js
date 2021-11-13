import React from 'react'
import firebase from 'firebase/compat/app';


// const auth = firebase.auth()


function SignIn(props) {
const auth = props.auth

  const signInWithGoogle = (props) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
      <button onClick={signInWithGoogle}>Sign in with Google</button>
  )

}

export default SignIn
