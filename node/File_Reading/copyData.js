const fs = require('fs');

function copyData(origin, destination){

    fs.readFile(origin, 'utf-8', (err, data) => {
        if (err) {
          console.log("Error while reading");
        } else {
    
          console.log("Written succesfully");
          fs.writeFile(destination, data, (err) => {
            if(err){
               console.log("Error while writing")
            } else{
                console.log("Content written sucesfully");
            }
          });
        }
      });

}


copyData("node/File_Reading/file1.txt", "node/File_Reading/file3.txt");

console.log("HELLO");