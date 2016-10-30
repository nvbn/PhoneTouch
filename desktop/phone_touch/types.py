from collections import namedtuple
from uuid import uuid4


Window = namedtuple('Window', ('title', 'executable'))


class BaseControl(object):
    def __init__(self):
        self.id = uuid4().hex

    @property
    def as_dict(self):
        return {'id': self.id,
                'type': self.__class__.__name__}


class Button(BaseControl):
    def __init__(self, icon, hotkey=None, command=None):
        super().__init__()
        self.icon = icon
        self.hotkey = hotkey
        self.command = command

    @property
    def as_dict(self):
        return dict(super().as_dict,
                    icon=self.icon,
                    hotkey=self.hotkey,
                    command=self.command)


class CheckableButton(Button):
    def __init__(self, icon, is_checked, hotkey=None, command=None):
        super().__init__(icon, hotkey, command)
        self.is_checked = is_checked

    @property
    def as_dict(self):
        return dict(super().as_dict,
                    is_checked=self.is_checked)


class Slider(BaseControl):
    def __init__(self, start, end, current, command):
        super().__init__()
        self.start = start
        self.end = end
        self.current = current
        self.command = command

    @property
    def as_dict(self):
        return dict(super().as_dict,
                    start=self.start,
                    end=self.end,
                    current=self.current,
                    command=self.command)


class Spacer(BaseControl):
    pass
