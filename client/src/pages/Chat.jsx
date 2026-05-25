import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';
import { socket } from '../services/socket';
import { getChannelMessages } from '../services/api';

const CHANNELS = ['general', 'gaming', 'coding', 'music', 'memes'];

function Chat({ user, onLogout }) {
  const [currentChannel, setCurrentChannel] = useState('general');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.connect();
    return () => { socket.disconnect(); };
  }, []);

  useEffect(() => {
    if (user && currentChannel) {
      socket.emit('join_channel', currentChannel);
            getChannelMessages(currentChannel)
        .then(res => setMessages(res.data))
        .catch(err => console.error("Error loading messages", err));
    }

    return () => {
      if (user && currentChannel) {
        socket.emit('leave_channel', currentChannel);
      }
    };
  }, [currentChannel, user]);

  useEffect(() => {
    socket.on('receive_message', (newMessage) => {
      if (newMessage.channel === currentChannel) {
        setMessages((prev) => [...prev, newMessage]);
      }
    });

    return () => { socket.off('receive_message'); };
  }, [currentChannel]);

  const handleSendMessage = (text) => {
    const messageData = {
      channel: currentChannel,
      sender: user.username,
      text: text
    };
    socket.emit('send_message', messageData);
  };

  return (
    <div className="app-container">
      <Sidebar 
        channels={CHANNELS} 
        currentChannel={currentChannel} 
        setCurrentChannel={setCurrentChannel} 
        user={user} 
        onLogout={onLogout} 
      />
      <ChatArea 
        currentChannel={currentChannel} 
        messages={messages} 
        onSendMessage={handleSendMessage} 
      />
    </div>
  );
}

export default Chat;