radio.setGroup(250)
RunComp.SetLightLevel()
let key0 = 0
let key1 = 1
let key2 = 2
RunComp.OnLightDrop(function on_light_drop() {
    radio.sendNumber(key1)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(key0)
    control.reset()
})
radio.onReceivedString(function on_received_number1(key2: string) {
    control.reset()
})
radio.onReceivedString(function on_received_number2(key0: string) {
    control.reset()
})
