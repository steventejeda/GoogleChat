import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

const Chats = () => {
  const history = useHistory();

  const handleLogout = async () => { 
    await auth.signOut();

    history.push('/');
  }


    return (
      <div className="chats-page">
        <div className="nav-bar">
          <div className="logo-tab">
            InstaChat
          </div>
          <div onClick={handleLogout} className="logout-tab">
          Logout
          </div>
        </div>
        <ChatEngine 
          height="calc(100vh - 66px)"
          projectId="
          b93d7b2d-135f-48d7-8104-35146f7b9e01"
          userName="."
          userSecret="."
        />
      </div>
    )
}

export default Chats
