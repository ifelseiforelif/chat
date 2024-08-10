import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Body({ messages }) {
  console.log(messages);
  const navigate = useNavigate();
  const handlerBtn = () => {
    localStorage.clear("user");
    navigate("/");
  };
  return (
    <>
      <header className="header">
        <button className="btn" onClick={handlerBtn}>
          Покинуть чат
        </button>
      </header>
      <div className="container">
        {messages.map((el, index) =>
          el.name === localStorage.getItem("user") ? (
            <div className="chats" key={el.index}>
              <p>Вы, {el.name}</p>
              <div className="message-sendler">
                <p>{el.text}</p>
              </div>
            </div>
          ) : (
            <div className="chats" key={el.index}>
              <p>{el.name}</p>
              <div className="message-recipient">
                <p>{el.text}</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
