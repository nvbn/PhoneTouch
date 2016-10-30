from phone_touch.types import Button

priority = 0


def match(window):
    return 'Google Chrome' in window.title


def get_controls(window):
    return [
        Button('tab', 'ctrl+t'),
        Button('close', 'ctrl+w'),
        Button('arrow-back', 'alt+Left'),
        Button('loop', 'F5'),
    ]
