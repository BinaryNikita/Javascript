const fs = require('fs');

function copyData(source, Destination){

    const readableStream = fs.createReadStream(source, {encoding: 'utf-8'});


    const writableStream = fs.createWriteStream(Destination);
    
    readableStream.pipe(writableStream);
    
    
    writableStream.on('finish', ()=>{
       console.log("File copied successfully");
    });
}

copyData('/Users/nikita/Desktop/Javascript-main/node/File_Reading/Streams/f1.txt', '/Users/nikita/Desktop/Javascript-main/node/File_Reading/Streams/f2.txt')