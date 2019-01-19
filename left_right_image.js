let myImage: Image = null
let offset = 0
input.onGesture(Gesture.TiltLeft, function () {
    offset += 1
})
input.onGesture(Gesture.TiltRight, function () {
    offset += -1
})
offset = 0
myImage = images.createBigImage(`
    . . # # . . # # # #
    . . # # . . # . # .
    . # . # . . # . # .
    # . . # . . . . # .
    . . . # # # . . # .
    `)
basic.forever(function () {
    myImage.showImage(offset)
})
