import React, { useState,useRef } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import '../componentsStyle/ChatRoom.css'
import icon from '../icon/icon_button.png'

function ChatRoom(props) {
    const dummy = useRef();
    
    const firestore = firebase.firestore();

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
    const auth = props.auth
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }


  
    return (<>
      <main className='box'>
  
        {messages && messages.map(msg => <ChatMessage auth={auth} key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form className='form_bottom' onSubmit={sendMessage}>
  
        <input className='input' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="message.." />
  
        <button className='button_input' type="submit" disabled={!formValue}><img className="img_button" src='https://img.icons8.com/ios/452/paper-plane.png'></img></button>
  
      </form>
    </>)
  }

export default ChatRoom
