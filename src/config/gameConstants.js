// Body categories
const BULLET_CATEGORY = 0x0001;
const WALL_CATEGORY = 0x0002;
const PAWN_CATEGORY = 0x0004;

// Canvas
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

// Game
const GAME_SPEED_RATE = 10;
const MAX_PLAYERS = 5;

// Websocket connection
const BROADCAST_RATE_INTERVAL = 10;
const THROTTLING_INTERVAL = 0;

// Pawn
const RADIUS = 10;
const MOVEMENT_SPEED = 0.0004;
const MOVEMENT_SPEED_BOOST = 0.0008;
const INITIAL_POSITION = { x: 200, y: 200 };
const STARTING_HEALTH = 5;

// Bullet
const BULLET_SPEED = 5;
const BULLET_MAX_DISTANCE = 5000;

module.exports = {
  RADIUS,
  MOVEMENT_SPEED,
  MOVEMENT_SPEED_BOOST,
  INITIAL_POSITION,
  BROADCAST_RATE_INTERVAL,
  GAME_SPEED_RATE,
  THROTTLING_INTERVAL,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  BULLET_SPEED,
  BULLET_MAX_DISTANCE,
  BULLET_CATEGORY,
  WALL_CATEGORY,
  PAWN_CATEGORY,
  MAX_PLAYERS,
  STARTING_HEALTH,
};
