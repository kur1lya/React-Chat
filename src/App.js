import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignOut from './components/SignOut';
import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';


firebase.initializeApp({
  appId: '1:823254172152:web:fae061c8beed755da7960d',
  apiKey: 'AIzaSyB9aqZHQfpWFaFsNdFUO_K1EsQPKg9Cmw8',
  authDomain: 'chat-7a71b.firebaseapp.com',
  databaseURL: 'https://chat-7a71b-default-rtdb.firebaseio.com',
  projectId: 'chat-7a71b',
  storageBucket: 'chat-7a71b.appspot.com',
  messagingSenderId: '823254172152',
});

const auth = firebase.auth()
const firestore = firebase.firestore();



function App() {

  const [user] = useAuthState(auth);
  let content_class = user ? 'content' : 'no'
  // let header_class = 
  return (
    <div className="App">
      <div className='box'>

        {user ? <header className='header'>
          <h1>⚛️🔥💬</h1>
          <div className='signout'>
            <SignOut auth={auth} />

          </div>
        </header> : <div></div>}


        <div className={content_class}>
          <section >
            {user ? <ChatRoom auth={auth} /> : <SignIn auth={auth} />}
          </section>

        </div>
      </div>


    </div>
  );
}

// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }

//   return (
//       <button onClick={signInWithGoogle}>Sign in with Google</button>
//   )

// }

// function SignOut() {
//   return auth.currentUser && (
//     <button onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }


// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);

//   const [messages] = useCollectionData(query, { idField: 'id' });

//   const [formValue, setFormValue] = useState('');


//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL
//     })

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   return (<>
//     <main>

//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

//       <span ref={dummy}></span>

//     </main>

//     <form onSubmit={sendMessage}>

//       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

//       <button type="submit" disabled={!formValue}>🕊️</button>

//     </form>
//   </>)
// }



// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL} />
//       <p>{text}</p>
//     </div>
//   </>)
// }



export default App
