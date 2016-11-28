import { exec } from 'child_process';
import { isEqual } from 'lodash';
import xdotool from '../xdotool';

jest.mock('child_process');
jest.useFakeTimers();

test('When xdotool not available', () => {
  const callback = jest.fn();
  exec.mockImplementationOnce((cmd, callback) => callback({code: -1}));

  xdotool(1000, callback);
  jest.runAllTimers();

  expect(callback.mock.calls.length).toBe(0);
});

test('When xdotool available', () => {
  const callback = jest.fn();
  exec.mockImplementationOnce((cmd, callback) => callback({code: 1}));
  exec.mockImplementationOnce((cmd, callback) =>
    callback({code: 1}, 'nvbn@nvbn-XPS13-9333: ~/exp/phonetouch/desktop-js\n3090\n'));
  exec.mockImplementationOnce((cmd, callback) =>
    callback({code: 1}, '/usr/bin/terminal'));

  xdotool(1000, callback);
  jest.runOnlyPendingTimers();

  expect(callback.mock.calls.length).toBe(1);
  expect(isEqual(
    callback.mock.calls[0][0],
    {
      window: {
        title: 'nvbn@nvbn-XPS13-9333: ~/exp/phonetouch/desktop-js',
        pid: '3090',
        executable: '/usr/bin/terminal'
      }
    })
  ).toBe(true);
});
