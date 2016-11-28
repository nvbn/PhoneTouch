import { exec } from 'child_process';

export const sendKey = (key: string) => exec(`xdotool key ${key}`);
