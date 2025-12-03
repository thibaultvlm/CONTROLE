const http = require('http');
const app = require('./config/express');
const mongoose = require('mongoose')
const uri = "mongodb+srv://test:test@cluster0.3u98d2q.mongodb.net/?appName=Cluster0";
const port = 3000;
let promise = mongoose.connect(uri);

promise.then(() => {
    console.log('DB connected !');
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});

module.exports = app;