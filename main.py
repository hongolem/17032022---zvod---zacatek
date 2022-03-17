radio.set_group(250)
RunComp.set_light_level()

key0 = 0
key1 = 1
key2 = 2


def on_light_drop():
    radio.send_number(key1)
RunComp.on_light_drop(on_light_drop)

def on_button_pressed_a():
    radio.send_number(key0)
    control.reset()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_number1(key2):
    control.reset()
radio.on_received_string(on_received_number1)

def on_received_number2(key0):
    control.reset()
radio.on_received_string(on_received_number2)