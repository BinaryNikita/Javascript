const fs = require('fs');


function writeFile(filePath, data){
    fs.writeFile(filePath, data, (err) => {

        if(err){
            console.log("Error while writing into the file")
        } else{
            console.log("File written sucessfully")
        }

    });
}

writeFile('node/File_Reading/file3.txt', "Hello this is a content written through nodejs module fs");