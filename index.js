const express = require('express');
const path = require('path');
const { MessagePort } = require('worker_threads');

const createPath = (page) => path.resolve(__dirname, 'page', `${page}.html`);
const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(createPath('home'));
});

app.get('/contact', (req, res) => {
    res.sendFile(createPath('contact'));
});

app.use((req, res) => {
    res.status(404).sendFile(createPath('error'));
});

app.listen(3000, 'localhost', (err) => {
    err ? console.log(err.message) : console.log(`Listening in port: ${PORT}`);
});
