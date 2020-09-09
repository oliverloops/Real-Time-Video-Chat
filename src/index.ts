import { Server } from "./server";

const server = new Server();

server.listen((port) => {
  console.log(`Server listening on http://localhost:${port}`);
});
