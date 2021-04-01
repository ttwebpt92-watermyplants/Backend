const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const plantsRouter = require("./routers/plants");
const usersRouter = require("./routers/users");
const rootRouter = require("./routers/root");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", rootRouter);
server.use("/api/users", usersRouter);
server.use("/api/plants", plantsRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
