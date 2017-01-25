# PhoneTouch [WIP]

Shows touch panel on your phone with actions depending on active app on your laptop/desktop.

At this time only linux supported.

## Supported apps

* Chrome;
* Intellij Idea;
* VLC;
* Netflix;
* Pulseaudio (require pactl);
* Players like spotify (works better with playerctl).

### Desktop

Install dependencies:

```bash
npm install
```

Run server:

```bash
npm start
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
