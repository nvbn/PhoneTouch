from PyQt5.QtCore import Qt
from PyQt5.QtGui import QIcon, QPixmap, QPainter, QImage
from PyQt5.QtWidgets import QAction, QSystemTrayIcon, QMenu, QDialog, QLabel, \
    QVBoxLayout, QApplication
import qrcode


class QRImage(qrcode.image.base.BaseImage):
    def __init__(self, border, width, box_size):
        self.border = border
        self.width = width
        self.box_size = box_size
        size = (width + border * 2) * box_size
        self._image = QImage(
            size, size, QImage.Format_RGB16)
        self._image.fill(Qt.white)

    def pixmap(self):
        return QPixmap.fromImage(self._image)

    def drawrect(self, row, col):
        painter = QPainter(self._image)
        painter.fillRect(
            (col + self.border) * self.box_size,
            (row + self.border) * self.box_size,
            self.box_size, self.box_size,
            Qt.black)


class Ui(QSystemTrayIcon):
    def __init__(self, pair_code):
        super().__init__()
        self._pair_code = pair_code
        self._create_menu()

    def _create_menu(self):
        self._menu = QMenu()
        pair_action = QAction('Pair with phone', self._menu,
                              triggered=self._show_pairing_dialog)
        self._menu.addAction(pair_action)
        exit_action = QAction('Exit', self._menu,
                              triggered=QApplication.instance().quit)
        self._menu.addAction(exit_action)
        self.setContextMenu(self._menu)

    def _get_qr_code(self):
        pixmap = qrcode.make(self._pair_code, image_factory=QRImage).pixmap()
        label = QLabel()
        label.setPixmap(pixmap)
        return label

    def _show_pairing_dialog(self):
        dialog = QDialog(self._menu)
        dialog.setWindowTitle('Pair with phone')
        layout = QVBoxLayout()
        layout.addWidget(
            QLabel('Open app on your phone and scan qr code:'))
        layout.addWidget(self._get_qr_code())
        dialog.setLayout(layout)
        dialog.show()
