let playerB = 0
let playerA = 0
playerA = 0
playerB = 0
basic.forever(function () {
    basic.pause(100)
    basic.pause(Math.randomRange(0, 4000))
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.A)) {
        playerA += 1
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        playerB += 1
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
})
