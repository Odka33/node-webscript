
const fs = require('fs');
/*

// specify the path to the file, and create a buffer with characters we want to write
let path = 'ghetto_gospel.txt';
let buffer = new Buffer('Those who wish to follow me\nI welcome with my hands\nAnd the red sun sinks at last');

// open the file in writing mode, adding a callback function where we do the actual writing
fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'could not open file: ' + err;
    }

    // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('wrote the file successfully');
        });
    });
});
*/
/*
fs.writeFile('log.txt', 'Hello Node', function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
});
*/

let logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
logStream.write('\nInitial line...');
