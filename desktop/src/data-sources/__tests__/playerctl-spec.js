import { exec } from 'child_process';
import { isEqual } from 'lodash';
import playerctl from '../playerctl';

jest.mock('child_process');
jest.useFakeTimers();

test('When playerctl not available', () => {
  const callback = jest.fn();
  exec.mockImplementationOnce((cmd, callback) => callback({code: -1}));

  playerctl(1000, callback);
  jest.runOnlyPendingTimers();

  expect(callback.mock.calls.length).toBe(0);
});

test('When playerctl available', () => {
  const callback = jest.fn()

  exec.mockImplementationOnce((cmd, callback) => callback(null));
  exec.mockImplementationOnce((cmd, callback) => callback(null, 'Playing\n'));
  exec.mockImplementationOnce((cmd, callback) => callback(null, 'Artist'));
  exec.mockImplementationOnce((cmd, callback) => callback(null, 'Title'));
  exec.mockImplementationOnce((cmd, callback) => callback(null, 'http://cover'));

  playerctl(1000, callback);
  jest.runOnlyPendingTimers();

  expect(callback.mock.calls.length).toBe(1);
  expect(isEqual(
    callback.mock.calls[0][0],
    {
      playerctl: {
        status: 'Playing',
        artist: 'Artist',
        title: 'Title',
        artUrl: 'http://cover'
      }
    })
  ).toBe(true);
});
