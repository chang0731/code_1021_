let jj = 0
let yy = 0
let xx = 0
let ii = 0
let index = 0
ii += 1
for (let list = 0; list <= 4; list++) {
    xx = 4 - list
    yy = 4 - list
    ii = 0
    while (ii <= 4) {
        jj = 0
        while (jj <= yy) {
            led.plot(xx - jj, jj)
            jj += 1
        }
        ii += 1
    }
    basic.pause(200)
}
