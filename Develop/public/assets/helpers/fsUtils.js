const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
    // @param {string} destination 
    // @param {object}content
    // @returns {void}
const writeFromFile = util.promisify(fs.appendFile);

const writeToFile = (destination, content) =>
    writeFromFile(destination, JSON.stringify(content),(err, data) =>{
    err ? console.error(err, data) : console.info(`Written to ${destination}`)
});

const readAndAppend =(content,file)=>{
    readFromFile(file, 'utf8', (err,data)=>{
        err ? console.error(err, data) : 
        JSON.parse(data);
        parsedData.push(content);
        writeToFile(file);
    })
};




module.exports = { readFromFile, writeToFile, readAndAppend };