import React, { useState, useEffect, useRef } from "react";
// استيراد أيقونة سهم الإرسال وعلامة الهاشتاج الترحيبية
import { HiPaperAirplane, HiChatAlt2 } from "react-icons/hi";

function ChatArea({ currentChannel, messages, onSendMessage }) {
  const pic = "/logo192.png";
  const [messageInput, setMessageInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    onSendMessage(messageInput.trim());
    setMessageInput("");
  };

  return (
    <div className="chat-area">
      <div className="chat-header">
        <HiChatAlt2 size={22} style={{ color: 'var(--cyan-bright)' }} />
        <h2>{currentChannel}</h2>
        <span className="yellow-badge">Active Connection ✨</span>
      </div>

      <div className="messages-container">
        <div className="welcome-banner">
          <h1 className="welcome-title">Welcome to #{currentChannel}! 🎉</h1>
          <p>This is the start of the #{currentChannel} channel. Let's chat!</p>
        </div>

        {messages.map((msg) => (
          <div key={msg._id || Math.random()} className="message-item">
            <div className="msg-avatar">
              <img
                src={pic}
                alt="User Avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="msg-content">
              <div className="msg-meta">
                <span className="msg-sender">{msg.sender}</span>
                <span className="msg-time">
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <p className="msg-text">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* نموذج الإدخال مع زر السهم المطور خلف الحقل مباشرة */}
      <form className="message-form" onSubmit={handleSubmit} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder={`Message #${currentChannel}`}
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          style={{ paddingRight: '50px' }} // مساحة كافية للسهم داخل الإدخال
        />
        <button 
          type="submit" 
          className="send-message-btn"
          disabled={!messageInput.trim()}
        >
          <HiPaperAirplane />
        </button>
      </form>
    </div>
  );
}

export default ChatArea;