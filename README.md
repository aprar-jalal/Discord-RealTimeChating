# 🔮 UniCord — Real-Time Messaging Platform

UniCord is a vibrant, modern, and high-performance chat application inspired by Discord but crafted with a bright, cheerful, and gamified aesthetic. Designed with academic, gaming, and coding communities in mind, it supports fully real-time text channels with instant communication.

---

## 🚀 Key Features

* **⚡ Real-Time Chatting:** Instant, sub-second message delivery powered by **Socket.io**.
* **🎈 Playful & Vibrant UI:** A beautiful, customized bright light theme using crisp modern typography, fluid animations, and colorful channel categorization.
* **🔒 Smooth Form Validation:** Error-free user experience during login and registration using **React Hook Form**.
* **🎯 Contextual Dynamic Icons:** Fully unique, colorful icons tailored explicitly for individual topic rooms (`#gaming`, `#coding`, `#music`, `#memes`).
* **📱 Seamless UX:** Automated smooth scroll-to-bottom features upon sending/receiving text.

---

## 🛠️ Tech Stack

### Frontend (Client)
* **React.js** (Functional Components, Hooks)
* **React Hook Form** (Client-side validation)
* **Socket.io-client** (WebSockets)
* **React Icons** (Heroicons package)
* **CSS3** (Custom properties & modern flexible layout animations)

### Backend (Server)
* **Node.js** & **Express.js**
* **Socket.io** (Real-time events infrastructure)
* **MongoDB** (Message storage and user records)

---

## 📦 Project Directory Structure

```text
UniCord/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Sidebar, ChatArea, etc.
│   │   ├── pages/       # Login, Register, Chat main view
│   │   ├── services/    # api.js, socket.js configurations
│   │   └── App.css      # Custom bright & colorful styles
└── server/              # Backend Express & Socket API
