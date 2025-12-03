const http = require('http');

const express = require('express');

const app = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '../client/index.html');
}); 

app.use('/public', express.static('./client/public'));
app.use('/assets', express.static('./client/assets'));

app.get('liste', (req, res) => {
    res.send(Liste);
})
