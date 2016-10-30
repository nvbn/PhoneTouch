from phone_touch.types import Button

priority = 1000


def match(window):
    return True


def get_buttons(window):
    return [
        Button('previous-song', 'Previous Song', 'skip-previous', 'XF86AudioPrev'),
        Button('play/pause', 'Play/Pause', 'play-arrow', 'XF86AudioPlay'),
        Button('next-song', 'Next Song', 'skip-next', 'XF86AudioNext'),
    ]
