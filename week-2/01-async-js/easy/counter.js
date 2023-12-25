// Create a counter in JavaScript
// It should go up as time goes by in intervals of 1 second (with and without setInterval)

// counter function using setInterval
let counter1 = (num) => {
    let intervalId = setInterval(() => {
        if (num >= 0) {
            console.log(num)
            num -= 1  
        } else {
            console.log('Done')
            clearInterval(intervalId)
        }
    }, 1000)
}

// counter function using setTimeout
let counter2 = (num) => {
    setTimeout(() => {
        if (num >= 0) {
            console.log(num)
            counter2(num - 1)
        } else {
            console.log('Done')
        }
    }, 1000)
}