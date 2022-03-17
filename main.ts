radio.setGroup(250)
RunComp.SetLightLevel()
let reset = 0
let start = 1
let stop = 2
RunComp.OnLightDrop(function on_light_drop() {
    radio.sendNumber(start)
    music.playTone(Note.C, music.beat(100))
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(reset)
    control.reset()
})
