import React, { useEffect, useState } from react;
import { database } from ./firebase;
import ChatWindow from ./ChatWindow;

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = database.ref(messages);
    messagesRef.on(value, (snapshot) => {
      const data = snapshot.val();
      const messageArray = [];
      for (let id in data) {
        messageArray.push({ id, ...data[id] });
      }
      setMessages(messageArray);
    });

    return () => messagesRef.off();
  }, []);

  const handleSendMessage = (text) => {
    const messagesRef = database.ref(messages);
    messagesRef.push({ text });
  };

  return (
    <div>
      <h1>Chat App</h1>
      <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;

