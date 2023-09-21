import React from 'react';
import Message from './Message';

const MessageList = ({ messages, onDeleteMessage }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message
          key={index}
          sender={message.sender}
          content={message.content}
          onDelete={() => onDeleteMessage(index)}
        />
      ))}
    </div>
  );
};

export default MessageList;