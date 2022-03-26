IR.IR_callbackUser(function (message) {
    basic.showString("" + (message))
    if (message == 65) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 117)
    }
    if (message == 64) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 117)
    }
    if (message == 68) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    basic.clearScreen()
})
let message = 0
