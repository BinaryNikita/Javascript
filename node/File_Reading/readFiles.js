const fs = require('fs');

function logFileContent(filePath) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {

      console.log(data);
    }
  });
}

const file1 = 'node/File_Reading/file1.txt';
const file2 = 'node/File_Reading/file1.txt';

logFileContent(file1);
logFileContent(file2);

/* 

Key Points About UTF-8:
Definition:

UTF-8 (Unicode Transformation Format - 8 bit) is a character encoding for text.
Variable-Length Encoding:

Encodes characters using 1 to 4 bytes.
Simple characters (e.g., English letters) use 1 byte.
Complex characters (e.g., emojis, non-Latin scripts) use more bytes.
Unicode Support:

Covers all characters in the Unicode standard, including symbols, emojis, and languages worldwide.
Backward Compatible with ASCII:

All ASCII characters (0-127) are represented identically in UTF-8.
Widely Used:

Default encoding for modern web pages, APIs, and programming languages.
Efficient:

Saves space for texts dominated by ASCII characters.
Adapts byte usage dynamically based on character complexity.
Error Tolerance:

Easier to detect errors in corrupted UTF-8 text compared to other encodings.
Readable by Humans and Machines:

Outputs readable text, not raw binary, making it user-friendly.
Applications:
Reading and writing text files (fs.readFile in Node.js).
Storing and displaying multilingual text.
Encoding web content and databases.


*/
