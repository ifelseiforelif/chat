import { Sidebar } from "./components/Sidebar";
import { Body } from "./components/Body";
import { Message } from "./components/Message";
import { useEffect, useState } from "react";
export const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("response", (data) => {
      setMessages((messages) => [...messages, data]);
    });
  }, [socket, messages]);
  return (
    <div className="chat">
      <Sidebar />
      <div className="main">
        <Body messages={messages} />
        <Message socket={socket} />
      </div>
    </div>
  );
};
