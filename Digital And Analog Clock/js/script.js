let hElement = document.getElementById("hour")
let minElement = document.getElementById("minute")
let secElement = document.getElementById("second")

setInterval(displayTime, 1000)


function displayTime() {
    let date = new Date()
    let h = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let amPm = document.getElementById("amPm")
    console.log(h, min, sec);

    if (h >= 12) {
        amPm.textContent = "PM"
    } else {
        amPm.textContent = "AM"
    }

    if (h % 12 === 0) {
        h = 12
    } else {
        h = h % 12
    }

    let hourRotation = h * 30 + min / 2
    let minuteRotation = min * 6
    let secondRotation = sec * 6

    hElement.style.transform = `rotate(${hourRotation}deg)`
    minElement.style.transform = `rotate(${minuteRotation}deg)`
    secElement.style.transform = `rotate(${secondRotation}deg)`

    // ! DIGITALCLOCK----------------------------------------------------------

    document.getElementById("hh").textContent = h
    document.getElementById("min").textContent = min
    document.getElementById("sec").textContent = sec



}