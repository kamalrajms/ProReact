import React, { useState } from "react";

export default function MessageApp() {
  const [message, setMessage] = useState("");
  const [delay, setDelay] = useState(5);
  const [isSending, setIsSending] = useState(false);
  const [TimerId, setTimerId] = useState(null);
  const [sentMessage, setSendMessage] = useState("");

  const handleSend = () => {
    setIsSending(true);
    const id = setTimeout(() => {
      setSendMessage(message);
      setMessage("");
      setIsSending(false);
    }, 1000 * delay);
    setTimerId(id);
  };

  const handlecancel = () => {
    if (TimerId) clearTimeout(TimerId);
    setIsSending(false);
  };
  return (
    <div className="messApp">
      <nav className="Message">
        <h2>DM delay Message</h2>

        <textarea
          placeholder="Enter text message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input
          type="text"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
        />

        {!isSending ? (
          <button onClick={handleSend}>send with delay</button>
        ) : (
          <button onClick={handlecancel}>Cancel Sending</button>
        )}

        {sentMessage && (
          <div>
            <h2>message received</h2>
            <p>{sentMessage}</p>
          </div>
        )}
      </nav>
    </div>
  );
}
