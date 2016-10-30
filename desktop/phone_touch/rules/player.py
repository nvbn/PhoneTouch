from phone_touch.types import Button, Slider

priority = 1000


def match(window):
    return True


def get_controls(window):
    return [
        Button('skip-previous', 'XF86AudioPrev'),
        Button('play-arrow', 'XF86AudioPlay'),
        Button('skip-next', 'XF86AudioNext'),
    ]
