import { exec } from 'child_process';
import { isEqual } from 'lodash';
import pulseaudio from '../pulseaudio';

jest.mock('child_process');
jest.useFakeTimers();

test('When pactl not available', () => {
  const callback = jest.fn();
  exec.mockImplementationOnce((cmd, callback) => callback({code: -1}));

  pulseaudio(1000, callback);
  jest.runOnlyPendingTimers();

  expect(callback.mock.calls.length).toBe(0);
});

test('When pactl available', () => {
  const stdout = `Sink #0
	State: RUNNING
	Name: alsa_output.pci-0000_00_03.0.hdmi-stereo-extra1
	Description: Built-in Audio Digital Stereo (HDMI 2)
	Driver: module-alsa-card.c
	Sample Specification: s16le 2ch 44100Hz
	Channel Map: front-left,front-right
	Owner Module: 6
	Mute: no
	Volume: front-left: 32768 /  50% / -18,06 dB,   front-right: 32768 /  50% / -18,06 dB
	        balance 0,00
	Base Volume: 65536 / 100% / 0,00 dB
  `;
  const callback = jest.fn();
  exec.mockImplementationOnce((cmd, callback) => callback({code: 1}));
  exec.mockImplementationOnce((cmd, callback) => callback({code: 1}, stdout));

  pulseaudio(1000, callback);
  jest.runOnlyPendingTimers();

  expect(callback.mock.calls.length).toBe(1);
  expect(isEqual(callback.mock.calls[0][0], {volume: 50})).toBe(true);
});
