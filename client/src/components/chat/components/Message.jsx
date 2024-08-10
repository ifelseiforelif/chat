import { useState } from "react";
export function Message({ socket }) {
  const [message, setMessage] = useState("");
  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("user")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("user"),
        id: `${socket.id}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <div className="message-block">
      <form onSubmit={handleSend}>
        <input
          type="text"
          className="user-message"
          value={message}
          name=""
          id=""
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Отправить</button>
      </form>
    </div>
  );
}
