from phone_touch.types import Button

priority = 0


def match(window):
    return 'Google Chrome' in window.title


def get_buttons(window):
    return [
        Button('chrome-new-tab', 'Open new tab', 'tab', 'ctrl+t'),
        Button('chrome-close-tab', 'Close tab', 'close', 'ctrl+w'),
        Button('chrome-back', 'Back', 'arrow-back', 'alt+Left'),
        Button('chrome-reload', 'Reload page', 'loop', 'F5'),
    ]
