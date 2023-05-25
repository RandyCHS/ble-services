bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
basic.showIcon(IconNames.Heart)
bluetooth.startAccelerometerService()
bluetooth.startUartService()
loops.everyInterval(1000, function () {
    bluetooth.uartWriteLine("Ping")
})
