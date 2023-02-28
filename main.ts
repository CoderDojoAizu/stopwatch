let 計測開始時間 = 0
let 測定時間 = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    計測開始時間 = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    if (計測開始時間 > 0) {
        測定時間 = (input.runningTime() - 計測開始時間) / 1000
        basic.showNumber(測定時間)
        計測開始時間 = 0
    } else {
        basic.showNumber(測定時間)
    }
})
