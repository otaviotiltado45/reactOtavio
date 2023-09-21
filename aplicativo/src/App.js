import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const ColoridoH1 = styled.h1`
  color: white;
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${({ isMe }) => (isMe ? 'flex-end' : 'flex-start')};
`;

const Message = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f2f2f2;
  text-align: ${({ isMe }) => (isMe ? 'right' : 'left')};
  cursor: pointer;
`;

const MessageForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const SenderInput = styled(MessageInput)`
  max-width: 150px;
`;

const MessageButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
`;

function App() {
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState('');
  const [content, setContent] = useState('');

  const sendMessage = () => {
    if (sender.trim() === '' || content.trim() === '') {
      return;
    }
    const newMessage = { sender, content };
    setMessages([...messages, newMessage]);
    setSender('');
    setContent('');
  };

  const deleteMessage = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="App">
      <ColoridoH1>Uaizap</ColoridoH1>
      <div className="message-list">
        {messages.map((message, index) => (
          <MessageWrapper key={index} isMe={message.sender === 'eu'}>
            <Message
              isMe={message.sender === 'eu'}
              onDoubleClick={() => deleteMessage(index)}
            >
              {message.sender !== 'eu' && <strong>{message.sender}:</strong>} {message.content}
            </Message>
          </MessageWrapper>
        ))}
      </div>
      <MessageForm onSubmit={handleSubmit}>
        <SenderInput
          type="text"
          placeholder="Nome do remetente"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <MessageInput
          type="text"
          placeholder="Digite sua mensagem..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <MessageButton type="submit">Enviar</MessageButton>
      </MessageForm>
    </div>
  );
}

export default App;

