const cors = require("cors");
const express = require("express");
const http = require("http");
const setupWebSocket = require("../src/utils/webSocket");
const { Engine } = require("matter-js");
const { setUpdateGameStateInterval } = require("./services/gameStateService");
const { setBroadcastGameStateInterval } = require("./utils/broadcastUtils");

const { createWorld } = require("./services/createWorld");

const app = express();
const server = http.createServer(app);

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Initialize Matter.js engine and world
const engine = Engine.create();
const world = engine.world;
createWorld(world, engine);

console.log(engine);
console.log(world);

const webSocket = setupWebSocket(server, world);

setUpdateGameStateInterval(engine, world);
setBroadcastGameStateInterval(webSocket);

server.listen(3000, () => {
  console.log("Listening at :3000...");
});
