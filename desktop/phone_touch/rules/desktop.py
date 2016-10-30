from phone_touch.types import Button

priority = 2000


def match(window):
    return True


def get_buttons(window):
    return [
        Button('to-bottom-desktop', 'To Bottom Desktop',
               'arrow-downward', 'ctrl+alt+Down'),
        Button('to-top-desktop', 'To Top Desktop',
               'arrow-upward', 'ctrl+alt+Up'),
    ]
