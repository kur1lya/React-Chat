import React from 'react'
import '../componentsStyle/ChatMessage.css'




function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const auth = props.auth
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img className="img" src={photoURL} />
        <p className="text">{text}</p>
      </div>
    </>)
  }

export default ChatMessage
