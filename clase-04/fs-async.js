const fs = require('fs');


function readFile() {
    const pathFile = './text-input-file.txt';
    const content = fs.readFileSync(pathFile, 'utf-8');
    
    console.log(content);
}

function writeFile() {
    const pathFile = './text-output-file.txt';
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    fs.writeFileSync(pathFile, content, 'utf-8');
}

function appendFile() {
    const pathFile = './text-output-file.txt';
    const content = '\nLorem ipsum dolor sit amet, consectetur adipiscing elit.'
    fs.appendFileSync(pathFile, content, 'utf-8');
}

appendFile()