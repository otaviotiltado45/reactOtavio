import React from 'react';

const Message = ({ sender, content }) => {
  return (
    <div className={`message ${sender === 'eu' ? 'message-right' : 'message-left'}`}>
      {sender !== 'eu' && <span className="sender">{sender}</span>}
      <p>{content}</p>
    </div>
  );
};

export default Message;