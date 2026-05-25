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

---

##🚦 Getting Started
Follow these steps to spin up the local development environment on your machine:

Prerequisites
Make sure you have Node.js installed on your machine.

1. Setup the Backend Server
Navigate to your server directory, install dependencies, and launch it:
# Open a terminal from your project root
cd server

# Install backend dependencies
npm install

# Start your Node.js backend server
npm start
2. Setup the Frontend Client
Open a new terminal window, navigate to the frontend directory, install the required packages, and run the development build:

Bash
# Navigate to the client folder
cd client

# Install frontend libraries (including react-router-dom and react-icons)
npm install

# Spin up VITE/React local preview
npm run dev
---

