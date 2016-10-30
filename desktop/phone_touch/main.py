import sys
import signal
import uuid
from PyQt5.QtWidgets import QApplication
from PyQt5.QtCore import QSettings
from .ui import Ui
from .watcher import Watcher
from .sync import Sync


def main():
    signal.signal(signal.SIGINT, signal.SIG_DFL)
    app = QApplication(sys.argv)
    settings = QSettings(app)
    if not settings.value('pair_code'):
        settings.setValue('pair_code', uuid.uuid4().hex)
    pair_code = settings.value('pair_code')
    pair_code = 'test'
    app.setQuitOnLastWindowClosed(False)
    ui = Ui(pair_code)
    ui.show()
    sync = Sync(pair_code)
    watcher = Watcher(1, sync.update_buttons)
    sys.exit(app.exec())


if __name__ == '__main__':
    main()
