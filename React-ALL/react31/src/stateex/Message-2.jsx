import React, { useState } from "react";

function Message() {
  const [message, setMessage] = useState("Hello World!");

  const changeMessageHandler = (message) => {
    return () => {
      setMessage(message);
    };
  };

  return (
    <div>
      <h1>Message Component</h1>
      <h2>Wish message: {message}</h2>
      <button onClick={changeMessageHandler("Good Morning")}>
        Good Morning
      </button>
      <button onClick={changeMessageHandler("Good Afternoon")}>
        Good Afternoon
      </button>
      <button onClick={changeMessageHandler("Good Night")}>Good Night</button>
    </div>
  );
}

export default Message;