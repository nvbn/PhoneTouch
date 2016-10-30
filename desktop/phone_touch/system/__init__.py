import sys

if 'linux' in sys.platform:
    from .linux import *
else:
    raise Exception('Platform not supported')
