import { exec } from 'child_process';

const getExecutable = (pid, callback) =>
  exec(`readlink -f /proc/${pid}/exe`, (error, stdout, stderr) =>
    callback(stdout.split('\n')[0])
  );

const getWindow = (callback) =>
  exec('xdotool getwindowfocus getwindowname getwindowpid',
    (error, stdout, stderr) => {
      const [title, pid, ..._] = stdout.split('\n');
      getExecutable(pid, (executable) => callback({title, pid, executable}));
    });

export default (interval, callback) => exec('xdotool -h', (error) => {
  if (error) {
    return;
  }

  setInterval(
    () => getWindow((window) => callback({window})),
    interval);
});
