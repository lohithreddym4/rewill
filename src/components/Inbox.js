"use client";

import React, { useState } from "react";
import { FiPaperclip,FiSend } from "react-icons/fi"; // Importing paperclip icon
import styles from "../styles/Inbox.module.css";
import Image from "next/image";

const Inbox = () => {
  const [chats, setChats] = useState([
    { id: 1, name: "John Doe", lastMessage: "Is this item still available?" },
    { id: 2, name: "Jane Smith", lastMessage: "Can you deliver it today?" },
    { id: 3, name: "David Brown", lastMessage: "Thank you for the quick response!" },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([
    { id: 1, sender: "John Doe", text: "Hi, is this item still available?", type: "text" },
    { id: 2, sender: "You", text: "Yes, it is!", type: "text" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [attachments, setAttachments] = useState([]);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() && attachments.length === 0) return;

    const newMsgs = attachments.map((attachment) => ({
      id: messages.length + 1,
      sender: "You",
      text: "",
      type: "image",
      attachment,
    }));

    if (newMessage.trim()) {
      newMsgs.push({
        id: messages.length + newMsgs.length + 1,
        sender: "You",
        text: newMessage.trim(),
        type: "text",
      });
    }

    setMessages((prev) => [...prev, ...newMsgs]);
    setNewMessage("");
    setAttachments([]);
  };

  const handleAttachmentChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    if (imageFiles.length) {
      const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
      setAttachments((prev) => [...prev, ...imageUrls]);
    } else {
      alert("Only image files are allowed!");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Inbox</h1>
      <div className={styles.chatList}>
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={styles.chatItem}
            onClick={() => handleChatClick(chat)}
          >
            <h3 className={styles.chatName}>{chat.name}</h3>
            <p className={styles.lastMessage}>{chat.lastMessage}</p>
          </div>
        ))}
      </div>

      {selectedChat && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2 className={styles.chatHeader}>{selectedChat.name}</h2>
              <button
                onClick={() => setSelectedChat(null)}
                className={styles.closeButton}
              >
                &times;
              </button>
            </div>
            <div className={styles.messages}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.message} ${
                    msg.sender === "You" ? styles.sent : styles.received
                  }`}
                >
                  {msg.type === "text" ? (
                    <p>{msg.text}</p>
                  ) : (
                    <Image src={msg.attachment} alt="Attachment" width={200} height={200}  className={styles.image} />
                  )}
                </div>
              ))}
            </div>
            <div className={styles.previewSection}>
              {attachments.length > 0 && (
                <div className={styles.previewContainer}>
                  <p className={styles.attachmentInfo}>
                    {attachments.length} image{attachments.length > 1 ? "s" : ""} selected
                  </p>
                  <div className={styles.previewImages}>
                    {attachments.map((img, index) => (
                      <Image key={index} src={img} 
                      width={100} height={100}
                      alt="Preview" className={styles.previewImage} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className={styles.messageInput}>
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className={styles.input}
              />
              <label htmlFor="fileInput" className={styles.attachmentButton}>
                <FiPaperclip />
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                multiple
                onChange={handleAttachmentChange}
                className={styles.fileInput}
              />
              <button onClick={handleSendMessage} className={styles.sendButton}>
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
