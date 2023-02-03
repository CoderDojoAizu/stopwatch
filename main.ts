input.onButtonPressed(Button.A, function () {
    if (計測開始時間 > 0) {
        測定時間 = (input.runningTime() - 計測開始時間) / 1000
        basic.showNumber(測定時間)
    }
    if (計測開始時間 == 0) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        計測開始時間 = input.runningTime()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Diamond)
    計測開始時間 = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(測定時間)
})
let 測定時間 = 0
let 計測開始時間 = 0
basic.showIcon(IconNames.Diamond)
計測開始時間 = 0
