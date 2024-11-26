const fs = require('fs');

function logFileContent(filePath) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const words = data.split(/\s+/);
      let max = words[0];
      for(let a of words){
        if(a.length > max.length){
            max = a;
        }
      }
      console.log('Largest word: ' + max);
    }
  });
}


logFileContent('node/File_Reading/file3.txt');
