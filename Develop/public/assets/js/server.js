const express = require('express');
const path = require('path');
const notes = require('./db.json')

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('assets'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get('/api/notes', (req, res)=>
    res.json(notes));

app.post('/api/notes', (req, res)=>{
    res.json(`${req.method} request recieved, ${req.body}`);
});    

