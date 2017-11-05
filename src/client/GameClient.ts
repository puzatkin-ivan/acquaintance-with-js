export namespace Client {

  function initializationMessage(keyboardEvent: KeyboardEvent, isPressed: boolean): object {
    return {
      key: keyboardEvent.keyCode,
      isPressed: isPressed,
    };
  }

  function sendKey(socket: SocketIO.Socket, keyboardEvent: KeyboardEvent, isPressed: boolean) {
    const message = initializationMessage(keyboardEvent, isPressed);
    if (message != {}) {
      socket.emit("keyMap", JSON.stringify(message));
    }
  }

  export function initGame(socket: SocketIO.Socket, nickname: string) {

    socket.emit("nickname", nickname);

    window.addEventListener("keydown", (keyboardEvent: KeyboardEvent) => {
      sendKey(socket, keyboardEvent, true);
      keyboardEvent.preventDefault();
    });

    window.addEventListener("keyup", (keyboardEvent: KeyboardEvent) => {
      sendKey(socket, keyboardEvent, false);
      keyboardEvent.preventDefault();
    });

    socket.on("disconnect", () => {
      alert("Sorry, Server Close")
    });

    socket.on("new_player", (messageEvent: any) => {
      console.log(messageEvent);
    });

    socket.on("update_data", (messageEvent: any) => {
      console.log(messageEvent);
    });
  }
}