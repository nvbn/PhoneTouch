import http from 'http';
import { Server } from 'ws';
import { RemoteCallback, Control } from './types';

class WSServer {
  constructor(port: number, runCallback: RemoteCallback) {
    const server = http.createServer();
    server.listen(port);

    this._ws = new Server({server});
    this._ws.on('connection', (client) =>
      client.on('message',
        (data) => runCallback(JSON.parse(data))));
  }

  send(data: Control[]) {
    for (const client of this._ws.clients) {
      client.send(JSON.stringify(data));
    }
  }
}

export default WSServer;
