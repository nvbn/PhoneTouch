from subprocess import Popen, PIPE
from psutil import Process
from ..types import Window


def get_active_window_title():
    proc = Popen(['xdotool', 'getwindowfocus', 'getwindowname', 'getwindowpid'],
                 stdout=PIPE)
    title, pid, *_ = proc.stdout.read().decode().split('\n')
    return Window(title=title,
                  executable=Process(int(pid)).cmdline())


def send_key(key):
    Popen(['xdotool', 'key', key])
