basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(4 - i + j, j)
            basic.pause(200)
        }
    }
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(4 - i + j, j + 1)
            basic.pause(200)
        }
    }
})
