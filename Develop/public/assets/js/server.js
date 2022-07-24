const express = require('express');
const path = require('path');
const notes = require('../../../db/db.json');
const {readFromFile, writeToFile} = require('../helpers/fsUtils');

// const PORT = process.env.PORT || 3001
const PORT = 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/api');
app.use(express.static('assets'));

app.get('/', (req, res)=>{
        res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname,'notes.html'));
});

app.get(notes, (req, res)=>{
    console.log(req)
    readFromFile(req)
    .then(notes => (
        res.status(200).json(notes)
    ))});
    // .catch(error) =>{
    //     res.status(404).json(notes)
    // };
    // });
    

app.post('/api/notes', (req, res)=>{
    writeToFile
    res.json(`${req.method} request recieved, ${req.body}`);
      // Destructuring assignment for the items in req.body
  const { title, note } = req.body;

  // If all the required properties are present
  if (title && note ) {
    // Variable for the object we will save
    const newNote = {
      title,
      note,
    };

    const response = {
      status: 'success',
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting note');
  }
});

  

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
