from phone_touch.types import Button

priority = 0


def match(window):
    return 'term' in window.title.lower() \
           or 'term' in window.executable[-1].lower()


def get_buttons(window):
    return [
        Button('term-kill', 'Terminal Kill', 'close', 'ctrl+c'),
    ]
