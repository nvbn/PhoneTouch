import pyrebase
from subprocess import Popen
from .matcher import get_controls
from .system import send_key
from .config import firebase


class Sync(object):
    def __init__(self, pair_code):
        self._pair_code = pair_code
        self._db = pyrebase.initialize_app(firebase).database()
        self._listen_to_interactions()

    @property
    def _root(self):
        return self._db.child('pair') \
            .child(self._pair_code)

    def _on_interaction(self, data):
        control = data.get('data')
        if not control:
            return

        if control['type'] in ('Button', 'CheckableButton'):
            if control['hotkey']:
                send_key(control['hotkey'])
            elif control['command']:
                Popen(control['command'], shell=True)
        elif control['type'] == 'Slider':
            Popen(control['command'].format(control['value']), shell=True)

    def _listen_to_interactions(self):
        self._root \
            .child('interaction') \
            .stream(self._on_interaction)

    def update_controls(self, window):
        self._root \
            .child('panel') \
            .child('controls') \
            .set([control.as_dict for control in get_controls(window)])
