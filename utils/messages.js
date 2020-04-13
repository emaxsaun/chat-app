const moment = require('moment');
const tz = require('moment-timezone');

function formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().tz('America/New_York').format('h:mm a')
    }
}

module.exports = formatMessage;