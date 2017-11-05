

export namespace TemplateServer {
  function startServer(socketServer: SocketIO.Server) {
    const message: object = {
      typeMessage: "MessageInterval",
    };
    setInterval(() => {
      socketServer.sockets.emit("update_data",  JSON.stringify(message))
    }, 2000);
  }

  export function initServer(socketServer: SocketIO.Server) {
    startServer(socketServer);

    socketServer.on('connection', (client: SocketIO.Socket) => {
      const messageNewPlayer: object = {
        typeMessage: "NewClient",
        id: client.id,
      };

      client.emit("new_player", JSON.stringify(messageNewPlayer));

      client.on("disconnect", () => {
        client.broadcast.emit("Disconnect Client", "");
      });

      client.on("nickname", (data: any) => {
        console.log(data);
      });

      client.on("keyMap", (data: any) => {
        console.log(data);
      });

    })
  }
}