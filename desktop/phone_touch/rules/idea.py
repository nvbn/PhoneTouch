from phone_touch.types import Button

priority = 0


def match(window):
    return 'IDEA' in window.title


def get_buttons(window):
    return [
        Button('idea-run', 'Run', 'play-for-work', 'shift+F10'),
        Button('idea-rerun', 'Rerun', 'replay', 'ctrl+F5'),
    ]
