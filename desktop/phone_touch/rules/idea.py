from phone_touch.types import Button

priority = 0


def match(window):
    return 'IDEA' in window.title


def get_controls(window):
    return [
        Button('play-for-work', 'shift+F10'),
        Button('replay', 'ctrl+F5'),
    ]
