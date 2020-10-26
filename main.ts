basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(4 - i + j, j)
            basic.pause(200)
        }
    }
    for (let k = 0; k <= 4; k++) {
        for (let l = 0; l <= k; l++) {
            led.plot(4 - k + l, l + 1)
            basic.pause(200)
        }
    }
})
