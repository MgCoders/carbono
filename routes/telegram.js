var express = require('express');
var telegram = require('../helpers/telegram.js');
var _ = require('underscore');
var router = express.Router();

router.post('/', function (req, res, next) {

    var telegramUpdate = req.body;

    // Message must start with '/weather'
    var telegramMessage = telegramUpdate.message.text;
    if (telegramMessage.lastIndexOf('/hi', 0) === 0) {

        // Get the chat id and message id to reply to
        var chat_id = telegramUpdate.message.chat.id;
        var reply_to_message_id = telegramUpdate.message.message_id;

        // Send message with Telegram API
        telegram.sendMessage(chat_id, 'What can MgCoders Bot do for you?', reply_to_message_id);

    }

    // Send response to Telegram, always OK
    res.statusCode = 200;
    res.end();
});

module.exports = router;
