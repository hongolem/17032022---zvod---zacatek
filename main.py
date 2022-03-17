radio.set_group(250)
RunComp.set_light_level()

reset = 0
start = 1
stop = 2


def on_light_drop():
    radio.send_number(start)
RunComp.on_light_drop(on_light_drop)

def on_button_pressed_a():
    radio.send_number(reset)
    control.reset()
input.on_button_pressed(Button.A, on_button_pressed_a)