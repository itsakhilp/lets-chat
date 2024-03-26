import { ChatEngine } from "react-chat-engine";
import React from "react";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <>
      <ChatEngine
        height="100vh"
        width="100%"
        projectID="d612bf86-7f58-4a21-84c2-e1ef965d9f75"
        userName="Akhil"
        userSecret="321321"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 
      />
    </>
  );
};

export default App;
