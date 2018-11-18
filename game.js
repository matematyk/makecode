let enemy_y = 0
let enemy_x = 0
let player_y = 0
let player_x = 0
function w_lewo(x: number) {
    return x = x - 1
}
function w_prawo(x: number) {
    return x = x + 1
}
player_x = 2
player_y = 4
enemy_x = Math.randomRange(0, 4)
basic.forever(function () {
    while (true) {
        basic.clearScreen()
        led.plot(player_x, player_y)
        led.plot(enemy_x, enemy_y)
        if (enemy_x == player_x && enemy_y == player_y) {
            basic.showString("Game Over!")
            break;
        }
        if (input.buttonIsPressed(Button.A) && player_x > 0) {
            w_lewo(player_x)
        }
        enemy_y = enemy_y + 1
        if (input.buttonIsPressed(Button.B) && player_x < 4) {
            w_prawo(player_x)
        }
        if (enemy_y > 4) {
            enemy_y = 0
            enemy_x = Math.randomRange(0, 4)
        }
        basic.pause(200)
    }
})
