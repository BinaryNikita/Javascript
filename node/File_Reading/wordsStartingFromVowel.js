const fs = require('fs');

function logFileContent(filePath) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const vowels = 'aeiouAEIOU';
      const words = data.split(/\s+/);
      let count = 0;
      for (let i = 0; i < words.length; i++) {
        if (words[i] && vowels.includes(words[i].charAt(0))) {
          count++;
        }
      }

      console.log('Total words starting from a vowel: ' + count);
    }
  });
}


logFileContent('node/File_Reading/file3.txt');
