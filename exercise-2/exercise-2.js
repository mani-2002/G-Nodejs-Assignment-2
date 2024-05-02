const fs = require('fs');

const sourceFilePath = 'source.exe'; // Replace with the actual source file path
const destinationFilePath = 'gradious-assignment.exe'; // Specify the destination file path

const readStream = fs.createReadStream(sourceFilePath);
const writeStream = fs.createWriteStream(destinationFilePath);

readStream.on('data', (chunk) => {
  writeStream.write(chunk);
});

readStream.on('end', () => {
  writeStream.end();
  console.log('File copied successfully!');
});

readStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writeStream.on('error', (err) => {
  console.error('Error writing file:', err);
});
