import React from 'react'
import '../App.css';





function SignOut(props) {
  
    return props.auth && (
      <button className='signOut_button' onClick={() => props.auth.signOut()}>{props.name}Sign Out</button>
    )
  }

export default SignOut
