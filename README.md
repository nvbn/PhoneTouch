# PhoneTouch [WIP]

Shows touch panel on your phone with actions depending on active app on your laptop/desktop.

At this time only linux supported.

## Supported apps

* Chrome;
* Terminal;
* Intellij Idea;
* Players like spotify.

## Setup for developers

Create firebase account, create configs from template and fill it:

* `desktop/phone_touch/config.py[.template]` &ndash; for desktop client;
* `mobile/config.js.template` &ndash; for mobile client.

### Desktop

Install PyQt5 and xdotool:

```bash
sudo apt install python3-pyqt5 xdotool
```
Install python dependencies:

```bash
python3 setup.py install
```
Run desktop client with:

```bash
python3 -m phone_touch.main
```

### Mobile

Install react-native:

```bash
npm install -g react-native-cli
```
Install js dependencies:

```
npm install
```
Run packer:

```
react-native start
```

Run app on phone:

```
react-native run-android
react-native run-ios
```

## License MIT
