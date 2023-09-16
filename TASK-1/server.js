const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const outputFolder = './output';

// Check if the output folder exists; create it if it doesn't
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

const PORT = 3000;

// Endpoint to create a text file with a timestamp as content
app.get('/createFile', (req, res) => {
    const currentTime = new Date();
    const year = currentTime.getFullYear().toString();
    const month = (currentTime.getMonth() + 1).toString();
    const date = currentTime.getDate().toString();
    const hours = currentTime.getHours().toString();
    const minutes = currentTime.getMinutes().toString();
    const seconds = currentTime.getSeconds().toString();

    // Create a unique filename based on the current timestamp
    const DateTimeForFileName = `${year}-${month}-${date}-${hours}-${minutes}-${seconds}.txt`;

    const filePath = path.join(outputFolder, DateTimeForFileName);

    // Write the current timestamp to the file
    fs.writeFile(filePath, currentTime.toISOString(), (err) => {
        if (err) {
            res.status(500).send(`Error occurs on creating file: ${err}`);
            return;
        }
        res.send(`File created Successfully at: ${filePath}`);
    });
});

// Endpoint to retrieve all text files from the output folder
app.get('/getFile', (req, res) => {
    fs.readdir(outputFolder, (err, files) => {
        if (err) {
            res.status(500).send(`Error occurs on reading file: ${err}`);
            return;
        }
        // Filter the list of files to only include .txt files
        const textFiles = files.filter((file) => path.extname(file) === '.txt');
        res.json(textFiles);
    });
});

app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT);
});
