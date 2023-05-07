input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    basic.showString("Hello!")
    basic.showLeds(`
        # . # . #
        . # . # .
        . . # . .
        . # . # .
        # . # . #
        `)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 8)
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 10)
    RingbitCar.forward()
    RingbitCar.brake()
    RingbitCar.turnleft()
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 20)
    RingbitCar.back()
    RingbitCar.freestyle(15, 15)
})
basic.forever(function () {
	
})
