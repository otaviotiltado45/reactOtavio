import React, { useState } from 'react';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  return (
    <div className="chat-page">
      <h1>Aplicativo de Chat</h1>
      <MessageList messages={messages} onDeleteMessage={handleDeleteMessage} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatPage;