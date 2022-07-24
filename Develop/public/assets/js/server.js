const express = require('express');
const path = require('path');
const notes = require('../../../db/db.json');
const {readFromFile, writeToFile, readAndAppend} = require('../helpers/fsUtils');

// const PORT = process.env.PORT || 3001
const PORT = 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('assets'));

app.get('/', (req, res)=>{
        res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, readFromFile(notes)));
});

app.get('/api/notes', (req, res)=>{
    console.log(req)
    readFromFile(req)
    .then(notes => (
        res.status(200).json(notes)
    ))});
    .catch(error) =>{
        res.status(404).json(notes)
    };
    // });
    

app.post('/api/notes', (req, res)=>{
    writeToFile
    res.json(`${req.method} request recieved, ${req.body}`);
});    

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
