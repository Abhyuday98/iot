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
    distance1 = grove.measureInCentimeters(DigitalPin.P1)
    serial.writeLine("d1=" + distance + "d2=" + distance1)
    // "https://e.io/?1=" + Math.round(distance) + "&2=" + Math.round(distance1),
    bluetooth.advertiseUrl(
    "https://e.io/?1=" + Math.round(distance) + "&2=" + Math.round(distance1),
    7,
    false
    )
    basic.pause(500)
    bluetooth.stopAdvertising()
    basic.pause(1000)
}
