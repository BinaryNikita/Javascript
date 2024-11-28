import path from 'path';

const filePath = path.join('folder', 'subfolder', 'file.txt');
// console.log(filePath);

const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
// console.log(absolutePath);

const basename = path.basename('node/File_Reading/copyData.js');
const fileName = path.basename('node/File_Reading/copyData.js', '.js');
console.log(basename);
console.log(fileName);

const directory = path.dirname('/Users/nikita/Desktop/Javascript-main/node/File_Reading/file3.txt');
console.log(directory);

const extension = path.extname('/Users/nikita/Desktop/Javascript-main/node/File_Reading/file3.txt');
console.log(extension);

const isabsolute = path.isAbsolute('Users/nikita/Desktop/Javascript-main/node/File_Reading/file3.txt');
console.log(isabsolute);

const parsed = path.parse('/Users/nikita/Desktop/Javascript-main/node/File_Reading/file3.txt');
console.log(parsed);

const pathObj = {
    dir: '/folder/subfolder',
    base: 'file.txt'
  };
  console.log(path.format(pathObj));

  const messyPath = 'folder//subfolder/../file.txt';
  console.log(path.normalize(messyPath));
  
