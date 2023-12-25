// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the following formats - 
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let clock = (format) => {
    setInterval(() => {
        let now = new Date()

        if (format == 24) {
            let time24hr = now.toTimeString()
            console.log(time24hr)
        } else if (format == 12) {
            let hours = now.getHours()
            let minutes = now.getMinutes()
            let seconds = now.getSeconds()
            let ampm = hours < 12 ? 'AM': 'PM'

            hours = hours > 12 ? hours - 12: hours
            minutes = minutes < 10 ? '0' + minutes: minutes
            seconds = seconds < 10 ? '0' + seconds: seconds

            console.log(`${hours}:${minutes}:${seconds} ${ampm}`)
        }
    }, 1000)
}
clock(12)