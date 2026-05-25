const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const Message = require('./models/Message');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] }
});

// التوصيل بـ MongoDB Compass عبر الـ .env
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/Discord';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB (Discord)'))
  .catch(err => console.error('MongoDB error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

io.on('connection', (socket) => {
  socket.on('join_channel', (channel) => {
    socket.join(channel);
  });

  socket.on('leave_channel', (channel) => {
    socket.leave(channel);
  });

  socket.on('send_message', async (data) => {
    const { channel, sender, text } = data;
    try {
      const newMessage = new Message({ channel, sender, text });
      await newMessage.save();
      io.to(channel).emit('receive_message', newMessage);
    } catch (err) {
      console.error('Socket message save error:', err);
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));