const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/:channel', messageController.getMessagesByChannel);

module.exports = router;