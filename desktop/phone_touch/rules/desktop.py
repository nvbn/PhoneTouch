from phone_touch.types import Button

priority = 2000


def match(window):
    return True


def get_controls(window):
    return [
        Button('arrow-downward', 'ctrl+alt+Down'),
        Button('arrow-upward', 'ctrl+alt+Up'),
    ]
