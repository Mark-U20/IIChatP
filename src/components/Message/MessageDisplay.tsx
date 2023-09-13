import { useState } from "react";
import { MessageItem } from "./MessageItem";
import "./MessageDisplay.css";

export const MessageDisplay = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  return (
    <div className="message-display">
      {messages.length === 0 ? (
        <h1 id="no-messages">No conversation history</h1>
      ) : (
        <ul className="message-list">
          {messages.map((message) => (
            <MessageItem
              key={message.id}
              message={message.text}
              sender={message.sender}
              timestamp={message.timestamp}
            />
          ))}
        </ul>
      )}

    </div>
  );
};
