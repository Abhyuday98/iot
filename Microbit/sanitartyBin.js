let distance = 0
basic.showLeds(`
    # . . # #
    # . . # #
    # # # . .
    # . # . .
    # # # . .
    `)
while (true) {
    let distance1 = 0
    distance = grove.measureInCentimeters(DigitalPin.P0)
    serial.writeLine("d1=" + distance + "d2=" + distance1)
    bluetooth.advertiseUrl(
    "https://e.io/?4=" + Math.round(distance),
    7,
    false
    )
    basic.pause(500)
    bluetooth.stopAdvertising()
    basic.pause(1000)
}
