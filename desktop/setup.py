#!/usr/bin/env python
from setuptools import setup, find_packages

VERSION = '0.1'

install_requires = ['qrcode', 'psutil', 'pyrebase']
extras_require = {":sys_platform=='win32'": ['win_unicode_console']}

setup(name='thefuck',
      version=VERSION,
      author='Vladimir Iakovlev',
      author_email='nvbn.rm@gmail.com',
      license='MIT',
      packages=find_packages(exclude=['ez_setup', 'examples',
                                      'tests', 'tests.*', 'release']),
      include_package_data=True,
      zip_safe=False,
      install_requires=install_requires,
      extras_require=extras_require,
      entry_points={'console_scripts': [
          'phone_touch = phone_touch.main:main']})
