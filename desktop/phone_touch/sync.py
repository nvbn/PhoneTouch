import pyrebase
from .matcher import get_buttons
from .system import send_key
from .config import firebase


class Sync(object):
    def __init__(self, pair_code):
        self._pair_code = pair_code
        self._db = pyrebase.initialize_app(firebase).database()
        self._listen_to_clicks()

    @property
    def _root(self):
        return self._db.child('pair') \
            .child(self._pair_code)

    def _on_click(self, data):
        print('click', data)
        hotkey = data.get('data', {}).get('hotkey')
        if hotkey:
            send_key(hotkey)

    def _listen_to_clicks(self):
        self._root \
            .child('click') \
            .stream(self._on_click)

    def update_buttons(self, window):
        self._root \
            .child('panel') \
            .child('buttons') \
            .set([button._asdict() for button in get_buttons(window)])
