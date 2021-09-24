basic.forever(function () {
	
})
basic.forever(function () {
    while (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        music.playTone(895, music.beat(BeatFraction.Double))
        basic.showString("T. alta")
    }
    while (input.temperature() < 26) {
        basic.showNumber(input.temperature())
        music.playTone(988, music.beat(BeatFraction.Double))
        basic.showString("T. baja")
        basic.showNumber(input.temperature())
    }
    basic.showString("T. normal")
})
