import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
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



function App() {

  const [user] = useAuthState(auth);
  let content_class = user ? 'content' : 'start_page'
  return (
    <div className="App">
      <div className='box'>

        {user ? <header className='header'>
          <h1>React chat</h1>
          <div className='signout'>
            <SignOut auth={auth} />

          </div>
        </header> : <div></div>}


        <div className={content_class}>
          <section >
            {user ? <ChatRoom user={user} auth={auth} /> : <SignIn auth={auth} />}
          </section>

        </div>
      </div>


    </div>
  );
}




export default App
