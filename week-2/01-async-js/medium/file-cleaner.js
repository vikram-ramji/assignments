// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

fs = require('fs')

// read file
fs.readFile('../example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        let splitData = data.split(' ')
        let cleanData = []
        for (let i = 0; i < splitData.length; i++) {
            if (splitData[i] != "") {
               cleanData.push(splitData[i]) 
            }
        }
        cleanData = cleanData.join(" ")
        console.log(cleanData)
    }
})