const Message = require('../models/Message');

exports.getMessagesByChannel = async (req, res) => {
  try {
    const messages = await Message.find({ channel: req.params.channel }).sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching messages' });
  }
};