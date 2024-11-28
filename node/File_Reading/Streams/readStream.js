const fs = require('fs');

function readStream(filePath){
    const readableStream = fs.createReadStream(filePath, {encoding: 'utf-8'});
    readableStream.on('data', (chunk) => {
        console.log("Recieved chunks");
        console.log(chunk);
    });

    readableStream.on('end', () => {
        console.log("Finished reading");
    });

    readableStream.on('error', (error) => {
        console.log("Error reading: ", err);
    });


}
readStream('node/File_Reading/file2.txt');