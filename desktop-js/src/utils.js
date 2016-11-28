import { exec } from 'child_process';

export const sendKey = (key) => exec(`xdotool key ${key}`);
