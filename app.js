const express = require('express');
const requestHandler = require('./request.handler'); // module pattern

const app = express();
app.use('/hello/:region', requestHandler.multiRegionGet);

module.exports = {
    app
}