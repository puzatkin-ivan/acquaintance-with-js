import ioClient = require("socket.io-client");
import {Client} from "./client/GameClient";

let nickname;

while (!nickname) {
  nickname = prompt("Enter Your Nickname", "");
}

Client.initGame(ioClient(), nickname);
