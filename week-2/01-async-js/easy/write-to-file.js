// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

fs = require('fs')

// write to file
fs.writeFile('../example.txt', 'Hello File!', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('File written!')
    }
})