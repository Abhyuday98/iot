basic.showLeds(`
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . . . . .
    `)
bluetooth.startLEDService()
bluetooth.startAccelerometerService()
bluetooth.startTemperatureService()
bluetooth.startButtonService()
