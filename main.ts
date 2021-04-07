let servo = 90
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && servo >= 2) {
        servo += -2
    }
    if (input.buttonIsPressed(Button.B) && servo <= 178) {
        servo += 2
    }
    motor.servo(motor.Servos.S8, servo)
})
