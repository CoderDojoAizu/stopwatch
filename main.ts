let スタート = 0
let ストップ = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    スタート = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    if (スタート > 0) {
        ストップ = (input.runningTime() - スタート) / 1000
        basic.showNumber(ストップ)
        スタート = 0
    } else {
        basic.showNumber(ストップ)
    }
})
