import { subscribe } from './src/data-sources';
import { getControls } from './src/rules';
import { runCallback, reset } from './src/controls';
import WSServer from './src/WSServer';

const port = process.argv[3] || 9000;

console.log(`Start server on 0.0.0.0:${port}`);

const server = new WSServer(port, runCallback);

subscribe(1000, (data) => {
  reset();
  server.send(getControls(data));
});
