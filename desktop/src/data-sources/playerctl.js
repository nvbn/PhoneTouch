import { exec } from 'child_process';

const getPlayerInfo = (callback) => {
  exec('playerctl status', (error, stdout, stderr) => {
    const status = stdout.split('\n')[0];
    exec('playerctl metadata xesam:artist', (error, stdout, stderr) => {
      const artist = stdout.split('\n')[0];
      exec('playerctl metadata xesam:title', (error, stdout, stderr) => {
        const title = stdout.split('\n')[0];
        exec('playerctl metadata mpris:artUrl', (error, stdout, stderr) => {
          const artUrl = stdout.split('\n')[0];
          callback({
            status, artist, title, artUrl,
          });
        });
      });
    });
  });
};

export default (interval, callback) => exec('playerctl', (error) => {
  if (error) {
    return;
  }

  setInterval(
    () => getPlayerInfo((playerctl) => callback({playerctl})),
    interval);
});
