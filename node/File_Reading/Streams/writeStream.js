const fs = require('fs');

function writeStream(filePath, data){
    const writableStream = fs.createWriteStream(filePath);

    writableStream.write(data);
    writableStream.end("Finished Writing");

    writableStream.on('finish', ()=>{
        console.log("All data written to the file");
    });

    writableStream.on('err', (err) => {
console.log('Error while writing into the file');
    });

}

writeStream('node/File_Reading/file3.txt', "Hello this is a new data");