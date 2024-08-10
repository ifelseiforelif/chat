import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
const PORT = 5000;
const app = express();
const server = http.Server(app);
const socket = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});
app.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});
socket.on("connection", (socket) => {
  console.log(`Connected ${socket.id}`);
  socket.on("message", (data) => {
    console.log(data);
    socket.emit("response", data);
  });
  socket.on("disconnect", () => {
    console.log(`Disconnected ${socket.id}`);
  });
});
server.listen(PORT, () => {
  console.log("Server is running...");
});
