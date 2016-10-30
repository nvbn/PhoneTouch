from PyQt5.QtCore import QTimer
from .system import get_active_window_title


class Watcher(QTimer):
    def __init__(self, timeout, on_title_changed):
        super().__init__()
        self._on_title_changed = on_title_changed
        self._last_title = None
        self.timeout.connect(self._run)
        self.start(timeout)

    def _run(self):
        current_title = get_active_window_title()
        if self._last_title != current_title:
            self._on_title_changed(current_title)
        self._last_title = current_title
